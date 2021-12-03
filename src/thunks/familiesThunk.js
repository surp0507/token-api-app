import axios from "axios";
import { setFamilies } from "../redux/actions";

const client = axios.create({
  baseURL: `http://localhost:8000`,
});
const familiAuth = localStorage.getItem("auth");
console.log(familiAuth);

client.defaults.headers.common["Authorization"] = `Bearer ${familiAuth}`;

export const requestFamilies = () => async (dispatch) => {
  const response = await client.get("/families ");
  dispatch(setFamilies(response.data));
};
