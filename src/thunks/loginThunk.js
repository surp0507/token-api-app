import axios from "axios";
import { setLogin } from "../redux/actions";

const client = axios.create({
  baseURL: `http://localhost:8000`,
});


export const requestLogin = (loginuser) => async (dispatch) => {
  const response = await client.post("/auth/login ", loginuser);
  dispatch(setLogin(response.data));
  localStorage.setItem("auth",response.data.access_token)
};
