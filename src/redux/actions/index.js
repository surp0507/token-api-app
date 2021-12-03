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

export const setLogin=(login)=>{
    return{
        type:types.SET_LOGIN,
        login
    }
}
