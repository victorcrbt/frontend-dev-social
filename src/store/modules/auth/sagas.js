import { all, takeLatest, put, call } from 'redux-saga/effects';

import api from '~/services/api';

import { signInSuccess, singFailure } from './actions';

export function* signIn({ payload }) {
  const { email, password } = payload;

  try {
    const response = yield call(api.post, '/sessions', { email, password });

    const { token, user } = response.data;

    yield put(signInSuccess(token, user));
  } catch (err) {
    yield put(singFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
