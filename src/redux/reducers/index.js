import { combineReducers } from "redux";
import { registerReducer } from "./registerReducer";
import productsReducer from "./productsReducer";
import {loginReducer} from './loginReducer'

const reducer = combineReducers({
  registerReducer,
  productsReducer,
  loginReducer
});

export default reducer;
