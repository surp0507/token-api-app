import { SET_LOCATION } from "../constants";
import { SET_CURRENT_PAGE } from "../constants";
import { SET_LOCATION_PER_PAGE } from "../constants";
import { SET_PAGE_NUMBER } from "../constants";

const initialState = {
  location: [],
  currentPage: 1,
  perPage: 5,
};

export const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCATION:
      return {
        ...state,
        location: action.location,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentpage,
      };
    case SET_PAGE_NUMBER:
      return {
        ...state,
        pageNumber: action.pagenumber,
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
