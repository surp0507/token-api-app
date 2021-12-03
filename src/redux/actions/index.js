import * as types from "../constants";

export const setRegistration = (registers) => {
  return {
    type: types.SET_REGISTRATION,
    registers,
  };
};

export const setProducts = (products) => {
  return {
    type: types.SET_PRODUCTS,
    products,
  };
};
