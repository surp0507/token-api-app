import client from "./Client";
import { setFamilies } from "../redux/actions";

const familiAuth = localStorage.getItem("auth")
client.defaults.headers.common["Authorization"] = `Bearer ${familiAuth}`;
export const requestFamilies = () => async (dispatch) => {
  const response = await client.get("/families ");
  dispatch(setFamilies(response.data));
};
