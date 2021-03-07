import { combineReducers } from "redux";
import form from "./form";
import employees from "./employees";
import dialogs from "./dialogs";

export default combineReducers({
  form,
  employees,
  dialogs,
});
