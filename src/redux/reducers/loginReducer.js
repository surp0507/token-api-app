import { SET_LOGIN } from "../constants";
import { SET_TOKEN } from "../constants/index";

const initialState = {
  login: {
    email: "",
    password: "",
  },
  token: "",
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

    default:
      return state;
  }
};
