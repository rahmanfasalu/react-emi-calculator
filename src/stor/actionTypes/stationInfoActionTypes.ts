import StationInformationType from "src/interfaces/loan.type.interface";

export const LOAD_LOAN_TYPE_SUCCESS = "LOAD_LOAN_TYPE_SUCCESS";
export const LOAD_LOAN_TYPE_ACTION = "LOAD_LOAN_TYPE_ACTION";

// Type for station information action
export interface loadLoanActionType {
  type: typeof LOAD_LOAN_TYPE_ACTION;
}
export interface loadLoanTypeSuccessActionType {
  type: typeof LOAD_LOAN_TYPE_SUCCESS;
  payload: StationInformationType[];
}

export type loadLoanTypeActionTypes =
  | loadLoanTypeSuccessActionType
  | loadLoanActionType;
