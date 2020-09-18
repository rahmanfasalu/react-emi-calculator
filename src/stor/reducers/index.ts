import { combineReducers } from "redux";
import loanTypesReducer from "./loanTypesReducer";

export const rootReducer = combineReducers({
  loanType: loanTypesReducer,
});
