import { SET_AUTHTOKEN } from "./authTokenType";

const setToken = (data) => {
  return {
    type: SET_AUTHTOKEN,
    payload: data,
  };
};

export const setAuthToken = (data) => {
  return function (dispatch) {
    if (data?.length > 0) {
      dispatch(setToken(data));
    } else {
      dispatch(setToken(""));
    }
  };
};
