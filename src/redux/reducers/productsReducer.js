import { SET_PRODUCTS } from "../constants";
import { SET_CURRENT_PAGE } from "../constants";
import { SET_LOCATION_PER_PAGE } from "../constants";

const initialState = {
  products: [],
  currentPage: 1,
  perPage: 4,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.products,
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

export default productsReducer;
