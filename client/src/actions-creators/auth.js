import hello from 'hellojs';
import { AUTH } from '../constants/actions';
import { FACEBOOK_APP_ID, TWITTER_APP_ID } from '../config/social-networks';

hello.init({
  facebook: FACEBOOK_APP_ID,
  twitter: TWITTER_APP_ID,
});

export function login(sn) {
  return dispatch => {
    return hello(sn)
      .login({ scope: 'basic,email' })
      .then(
        function({ authResponse }) {
          return authResponse.access_token;
        },
        reason => {
          console.error(reason);
          dispatch(reason);
        }
      )
      .then(user => {
        dispatch(loginApproved(user));
      });
  };
}

export function loginApproved(user) {
  return {
    type: AUTH.LOGIN_APPROVED,
    payload: { user },
  };
}

export function requestLogin() {
  return {
    type: AUTH.LOGIN_REQUESTED,
  };
}

export function failedLogin(error) {
  return {
    type: AUTH.LOGIN_FAILED,
    error: true,
    payload: new Error(error),
  };
}

export function logout() {
  return {
    type: AUTH.LOGOUT,
  };
}
