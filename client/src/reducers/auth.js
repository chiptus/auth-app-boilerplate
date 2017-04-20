import { AUTH } from '../constants/actions';

export default function(state = {}, action) {
  switch (action.type) {
    case AUTH.LOGOUT:
      return {};
    case AUTH.LOGIN_APPROVED:
      return {
        token: action.payload.user,
      };
    default:
      return state;
  }
}
