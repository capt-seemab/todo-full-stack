import { combineReducers } from "redux";
import authTokenReducer from "../reducers/authTokenReducer";

const rootReducer = combineReducers({
  authTokenValue:authTokenReducer,
});

export default rootReducer;