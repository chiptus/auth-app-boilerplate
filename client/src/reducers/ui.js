export default function(state = { error: '' }, action) {
  if (action.error) {
    return {
      ...state,
      error: action.payload.message,
    };
  }
  return state;
}
