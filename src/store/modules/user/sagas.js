import { all, takeLatest, put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { updateProfileSuccess } from './actions';

import api from '~/services/api';

export function* updateProfile({ payload }) {
  const { first_name, last_name, file, email, phone, ...rest } = payload.data;
  const {
    setOldPassword,
    setPassword,
    setConfirmPassword,
    setFile,
  } = payload.functions;

  const data = {
    first_name,
    last_name,
    email,
    phone: phone || null,
    ...(rest.oldPassword || rest.password ? rest : {}),
  };

  if (file) {
    try {
      const response = yield call(api.post, '/avatars', file);

      data.avatar_id = response.data.file.id;
      setFile('');
    } catch (err) {
      toast.error(err.message);
    }
  }

  try {
    const response = yield call(api.put, '/users', data);

    yield put(updateProfileSuccess(response.data));

    toast.success('Perfil atualizdo com sucesso!');
    setOldPassword('');
    setPassword('');
    setConfirmPassword('');
  } catch (err) {
    switch (err.response.data.error) {
      case 'User not found.': {
        toast.error(
          'Usuário não encontrado. Entre em contato com o administrador.'
        );
        break;
      }
      case 'The email is already used.': {
        toast.error('O e-mail já está em uso.');
        break;
      }
      case 'The phone is already used.': {
        toast.error('O telefone já está em uso.');
        break;
      }
      case 'You must provide your old password to update your password.': {
        toast.error(
          'Você deve informar sua senha atual para atualizar a mesma.'
        );
        break;
      }
      case 'Your old password do not match.': {
        toast.error('Sua senha atual está incorreta.');
        setOldPassword('');
        break;
      }
      default: {
        toast.error(err.response.data.error);
      }
    }
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
