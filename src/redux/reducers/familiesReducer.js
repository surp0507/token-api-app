import { SET_FAMILIES } from "../constants";
import { SET_CURRENT_PAGE } from "../constants";
import { SET_LOCATION_PER_PAGE } from "../constants";

const initialState = {
  families: [],
  currentPage: 1,
  perPage: 4,
};

export const familiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FAMILIES:
      return {
        ...state,
        families: action.families,
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
