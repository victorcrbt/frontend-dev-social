import { all, takeLatest } from 'redux-saga/effects';

export function* signIn() {
  console.tron.log('Saga executed');
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
