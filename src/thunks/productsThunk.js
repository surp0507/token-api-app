import axios from "axios";
import { setProducts } from "../redux/actions";

const client = axios.create({
  baseURL: `http://localhost:8000`,
});

client.defaults.headers.common[
  "Authorization"
] = `Bearer ${localStorage.getItem("auth")}`;
export const requestProducts = (filter) => async (dispatch) => {
  const response = await client.get("/products");
  dispatch(setProducts(response.data));
};
