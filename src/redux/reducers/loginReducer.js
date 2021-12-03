import { bindActionCreators } from "redux";
import { SET_LOGIN } from "../constants";

const initialState={
    login:{
        emai:"",
        password:""
    }
}

export const loginReducer=(state=initialState,action)=>{
    switch(action.type){

        case SET_LOGIN:return{
            ...state,
            login:{
                ...state.login,
                ...action.login
            }
        }

        default:return state;
    }
}

