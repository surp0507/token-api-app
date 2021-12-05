import client from "./Client";
import { setRegistration } from "../redux/actions";

export const requestRegistor = (register) => async (dispatch) => {
  const response = await client.post("/auth/register", register);
  dispatch(setRegistration(response.data));
};
