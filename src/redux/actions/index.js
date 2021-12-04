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

export const setLogin = (login) => {
  return {
    type: types.SET_LOGIN,
    login,
  };
};

export const setToken = (token) => {
  return {
    type: types.SET_TOKEN,
    token,
  };
};

export const setLocation = (location) => {
  return {
    type: types.SET_LOCATION,
    location,
  };
};

export const setFamilies = (families) => {
  return {
    type: types.SET_FAMILIES,
    families,
  };
};

export const setTransaction = (transaction) =>{
  return{
    type:types.SET_TRANSACTION,
    transaction

  }
}

export const setEmailError=(eError)=>{
  return{
    type:types.SET_EMAIL_ERROR,
    eError
  }
}

export const setPassError=(passError)=>{
  return{
    type:types.SET_PASSWORD_ERROR,
    passError
  }
}
