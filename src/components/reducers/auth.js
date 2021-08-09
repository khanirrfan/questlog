import { LOGIN, ERROR_LOGIN } from "../actions/types";

const initialState = {
    isAuthenticated: null,
    loading:true,
    user:null,
}

export default function(state = initialState, action){
    const {type, payload } = action;

    switch (type) {
        case LOGIN: 
            return {
                ...state,
                isAuthenticated:true,
                loading:false,
                user: payload
            }
        case ERROR_LOGIN:
            return {
                ...state,
                isAuthenticated: false,
                loading: false,
                user:payload
            }
        default: 
            return state;        
    }
}