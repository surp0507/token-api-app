import { combineReducers } from "redux";
import { registerReducer } from "./registerReducer";
import productsReducer from "./productsReducer";
import { loginReducer } from "./loginReducer";
import { locationReducer } from "./locationReducer";
import { familiesReducer } from "./familiesReducer";
import { transactionReducer } from "./transactionReducer";

const reducer = combineReducers({
  registerReducer,
  productsReducer,
  loginReducer,
  locationReducer,
  familiesReducer,
  transactionReducer,
});

export default reducer;
