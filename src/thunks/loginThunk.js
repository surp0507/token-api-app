import axios from "axios";
import { setLogin } from "../redux/actions";

const client = axios.create({
  baseURL: `http://localhost:8000`,
});

export const requestLogin = () => async (dispatch) => {
  const response = await client.post("/auth/login ");
  console.log(response);
  dispatch(setLogin(response))
};