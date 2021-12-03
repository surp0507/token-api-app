import { SET_REGISTRATION } from "../constants";

const initialState = {
  registration: {
    email: "",
    password: "",
  },
};

export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REGISTRATION:
      return {
        ...state,
        registration: {
          ...state.registration,
          ...action.registers,
        },
      };

    default:
      return state;
  }
};
