import { all, takeLatest, put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { signInSuccess, singFailure } from './actions';

export function* signIn({ payload }) {
  const { email, password } = payload;
  const { setPassword } = payload.functions;

  try {
    const response = yield call(api.post, '/sessions', { email, password });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));
    toast.success('Login realizado com sucesso!');
  } catch (err) {
    setPassword('');
    yield put(singFailure());

    switch (err.response.data.error) {
      case 'Invalid credentials.': {
        toast.error('Credencias inválidas.');
        break;
      }
      default: {
        toast.error(err.response.data.error);
      }
    }
  }
}

export function* signUp({ payload }) {
  const { first_name, last_name, email, password, phone } = payload;

  try {
    yield call(api.post, '/users', {
      first_name,
      last_name,
      email,
      password,
      phone,
    });

    toast.success('Cadastro realizado com sucesso!');
    history.push('/');
  } catch (err) {
    yield put(singFailure());

    switch (err.response.data.error) {
      case 'The email is already used.': {
        toast.error('O e-mail informado já está em uso.');
        break;
      }
      case 'The phone number is already used.': {
        toast.error('O telefone informado já está em uso.');
        break;
      }
      default: {
        toast.error(err.response.data.error);
      }
    }
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
