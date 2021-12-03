import axios from "axios";
import { setRegistration } from "../redux/actions";

const client = axios.create({
  baseURL: `http://localhost:8000`,
});

export const requestRegistor = () => async (dispatch) => {
  const response = await client.post("/auth/register");
  console.log(response);
};
