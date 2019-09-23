import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  const { payload, type } = action;

  return produce(state, draft => {
    switch (type) {
      case '@user/UPDATE_PROFILE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@user/UPDATE_PROFILE_SUCCESS':
      case '@auth/SIGN_IN_SUCCESS': {
        draft.profile = payload.user;
        draft.loading = false;
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
