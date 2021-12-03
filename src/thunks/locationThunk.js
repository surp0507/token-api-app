import axios from "axios";
import { setLocation } from "../redux/actions";

const client = axios.create({
  baseURL: `http://localhost:8000`,
});
const locAuth = localStorage.getItem("auth");
console.log(locAuth);

client.defaults.headers.common["Authorization"] = `Bearer ${locAuth}`;
export const requestLocation = () => async (dispatch) => {
  const response = await client.post("/locations ");
  dispatch(setLocation(response.data));
};
