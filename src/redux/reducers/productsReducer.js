import { SET_PRODUCTS } from "../constants";
import { SET_LIMIT } from "../constants";

const initialState = {
  products: [],
  limit:5


};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.products,
      };

      case SET_LIMIT:
        return {
          ...state,
          filter:{
            ...state.filter,
            limit: action.limit,
          }
        
        };

    default:
      return state;
  }
};

export default productsReducer;
