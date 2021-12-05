import { SET_TRANSACTION } from "../constants";
import { SET_CURRENT_PAGE } from "../constants";
import { SET_LOCATION_PER_PAGE } from "../constants";

const initialState = {
  transaction: [],
  currentPage: 1,
  perPage: 4,
};

export const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TRANSACTION:
      return {
        transaction: action.transaction,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentpage,
      };
    case SET_LOCATION_PER_PAGE:
      return {
        ...state,
        perPage: action.perpage,
      };
    default:
      return state;
  }
};
