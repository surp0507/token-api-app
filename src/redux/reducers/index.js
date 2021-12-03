import { combineReducers } from "redux";
import { registerReducer } from "./registerReducer";
import productsReducer from "./productsReducer";

const reducer = combineReducers({
  registerReducer,
  productsReducer
});

export default reducer;
