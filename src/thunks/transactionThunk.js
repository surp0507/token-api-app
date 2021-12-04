import { setTransaction } from "../redux/actions";
import axios from "axios";

const client=axios.create({
    baseURL:`http://localhost:8000`
});

const transacAuth=localStorage.getItem("auth");
 client.defaults.headers.common["Authorization"]=`Bearer ${transacAuth}`

export const reqestTransaction=()=> async (dispatch)=>{

    const response= await client.get("/transactions");
    dispatch(setTransaction(response.data));

}