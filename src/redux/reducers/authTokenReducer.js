import { SET_AUTHTOKEN } from "../actions/authTokenType";

const initialState = "";

const authTokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHTOKEN:
      return action.payload;
    default:
      return state;
  }
};

export default authTokenReducer;
