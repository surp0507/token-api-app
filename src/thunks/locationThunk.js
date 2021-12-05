import client from "./Client";
import { setLocation } from "../redux/actions";

const locAuth = localStorage.getItem("auth");
client.defaults.headers.common["Authorization"] = `Bearer ${locAuth}`;
export const requestLocation = () => async (dispatch) => {
  const response = await client.get("/locations ");
  dispatch(setLocation(response.data));
};
