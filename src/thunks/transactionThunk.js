import { setTransaction } from "../redux/actions";
import client from "./Client";

const transacAuth = localStorage.getItem("auth");
client.defaults.headers.common["Authorization"] = `Bearer ${transacAuth}`;
export const reqestTransaction = () => async (dispatch) => {
  const response = await client.get("/transactions");
  dispatch(setTransaction(response.data));
};
