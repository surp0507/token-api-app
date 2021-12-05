import client from "./Client";
import { setLogin } from "../redux/actions";
import { setToken } from "../redux/actions";

export const requestLogin = (loginuser) => async (dispatch) => {
  const response = await client.post("/auth/login ", loginuser);
  dispatch(setLogin(response.data));
  dispatch(setToken(response.data.access_token));
};
