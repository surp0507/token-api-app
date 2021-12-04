import { SET_TRANSACTION } from "../constants";

const initialState = {
  transaction: [],
};

export const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TRANSACTION:
      return {
        transaction: action.transaction,
      };
    default:
      return state;
  }
};
