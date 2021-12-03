import axios from "axios";
import { setRegistration } from "../redux/actions";
import { setToken } from "../redux/actions";

const client = axios.create({
  baseURL: `http://localhost:8000`,
});

export const requestRegistor = (register) => async (dispatch) => {
  const response = await client.post("/auth/register", register);
  dispatch(setRegistration(response.data));
};
