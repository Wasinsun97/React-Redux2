import { combineReducers } from "redux";
import authReducer from "./authReducer";
import projectReducer from "./projectReducer";

const rootRuducer = combineReducers({
  auth: authReducer,
  project: projectReducer
});

export default rootRuducer;