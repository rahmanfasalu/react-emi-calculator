import * as types from "../actionTypes/stationInfoActionTypes";
import initialState from "../initialState";

import { loadLoanTypeActionTypes } from "../actionTypes/stationInfoActionTypes";
import LoanTypeInterface from "src/interfaces/loan.type.interface";

// Stations Information reduces
export default function loanTypesReducer(
  state: LoanTypeInterface[] = initialState.loanType,
  action: loadLoanTypeActionTypes
) {
  switch (action.type) {
    case types.LOAD_LOAN_TYPE_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
