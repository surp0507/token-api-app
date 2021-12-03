import axios from "axios";
import { setProducts } from "../redux/actions";

const client = axios.create({
  baseURL: `http://localhost:8000`,
});

export const requestProducts = () => async (dispatch) => {
  const response = await client.post("/products");
  console.log(response);
};
