import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";
var rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
