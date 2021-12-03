import axios from "axios";
import { setProducts } from "../redux/actions";

const client = axios.create({
  baseURL: `http://localhost:8000`,
});

const productauth = localStorage.getItem("auth");
console.log(productauth);

client.defaults.headers.common["Authorization"] = `Bearer ${productauth}`;
export const requestProducts = () => async (dispatch) => {
  const response = await client.post("/products");
  console.log(response.data);
  dispatch(setProducts([response.data]));
};
