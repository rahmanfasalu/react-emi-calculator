import * as types from "../actionTypes/stationInfoActionTypes";
import { gbfsServices } from "src/services/mortageServices";
import { API } from "src/constants/appConstants";
import LoanTypeInterface from "src/interfaces/loan.type.interface";

// Station information action
export const loadLoanTypeActionSuccess = (
  data: LoanTypeInterface[]
): types.loadLoanTypeSuccessActionType => {
  return {
    type: types.LOAD_LOAN_TYPE_SUCCESS,
    payload: data,
  };
};

export const loadDataAction = (): types.loadLoanActionType => {
  return {
    type: types.LOAD_LOAN_TYPE_ACTION,
  };
};

export function fetLoanTypes() {
  return function (dispatch: (arg0: any) => void) {
    dispatch(loadDataAction());
    let url: string = API.loan_type;
    gbfsServices.fetLoanTypes(url).then((data) => {
      dispatch(loadLoanTypeActionSuccess(data));
    });
  };
}
