import { handleResponse, handleError } from "./responseHandler";

import data from "../_data/data.json";

export const gbfsServices = {
  fetLoanTypes,
};

// Function to load station information
async function fetLoanTypes(api: string) {
  return data;
}
