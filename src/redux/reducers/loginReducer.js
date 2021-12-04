import { SET_LOGIN } from "../constants";
import { SET_TOKEN } from "../constants/index";
import {SET_EMAIL_ERROR} from "../constants/index"
import {SET_PASSWORD_ERROR} from "../constants/index"

const initialState = {
  login: {
    email: "",
    password: "",
  },
  token: "",
  emailError:"",
  passError:""
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN:
      return {
        ...state,
        login: action.login,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };

      case SET_EMAIL_ERROR:return{
        ...state,
        emailError:action.eError

      }

      case SET_PASSWORD_ERROR:return{
        ...state,
        passError:action.passError
      
      }


    default:
      return state;
  }
};
