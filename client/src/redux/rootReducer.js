import { combineReducers } from "redux";
import modalReducer from "./modalReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  users: userReducer,
  modals: modalReducer
});

export default rootReducer;
