import { SET_FAMILIES } from "../constants";

const initialState = {
  families: [],
};

export const familiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FAMILIES:
      return {
        ...state,
        families: action.families,
      };
    default:
      return state;
  }
};
