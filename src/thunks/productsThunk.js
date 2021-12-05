import client from "./Client";
import { setProducts } from "../redux/actions";

client.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("auth")}`;
export const requestProducts = (filter) => async (dispatch) => {
  const response = await client.get("/products");
  dispatch(setProducts(response.data));
};
