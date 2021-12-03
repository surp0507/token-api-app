import { SET_LOCATION } from "../constants";

const initialState = {
  location: [],
};

export const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCATION:
      return {
        ...state,
        location: action.location,
      };
    default:
      return state;
  }
};
