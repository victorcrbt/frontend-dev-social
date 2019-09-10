import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
};

export default function auth(state = INITIAL_STATE, action) {
  const { payload, type } = action;

  return produce(state, draft => {
    switch (type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.profile = payload.user;
        break;
      }
      case '@auth/SIGN_OUT':
      case '@auth/SIGN_FAILURE': {
        draft.profile = null;
        break;
      }
      default:
    }
  });
}
