export function signInRequest(email, password, functions) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password, functions },
  };
}

export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user },
  };
}

export function singFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}
