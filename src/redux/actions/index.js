import * as types from '../constants'

export const setRegistration=(registers)=>{
    return{
        type:types.SET_REGISTRATION,
        registers
    }
}

