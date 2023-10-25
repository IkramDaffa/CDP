import { combineReducers } from "redux";
import user from "./user.jsx";
import todos from "./todos.jsx";

export default combineReducers({
  user,
  todos,
});
