import decode_token from "../utils";

const storeReducer = (state, action) => {
  const { type, payload } = action;
  if (type === "login_success") {
    state.token = payload.token;
    state.userInfo = decode_token(payload.token);
  }
  return state;
};

export default storeReducer;