import produce from 'immer';

const INITIAL_STATE = {};

export default function auth(state = INITIAL_STATE, action) {
  const { payload, type } = action;

  return produce(state, draft => {
    switch (type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.email = payload.email;
        draft.password = payload.password;
        break;
      }
      default:
    }
  });
}
