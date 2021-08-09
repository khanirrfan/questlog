import { GET_PROFILE, ERROR_PROFILE, GET_TAGS_SUCCESS, GET_TAGS_ERROR, GET_USER_QUESTIONS_SUCCESS, GET_USER_QUESTIONS_ERROR } from "../actions/types";

const initialState = {
    profile:null,
    tags: null,
    questions:null,
    loading:true,
    error:{}
}

export default function(state = initialState, action){
    const {type, payload} = action;

    switch(type){
        case GET_PROFILE:
            return {
                ...state,
                loading:false,
                profile: payload
            }
        case ERROR_PROFILE:
            return {
                ...state,
                loading:false,
                error:payload
            }
        case GET_TAGS_SUCCESS: 
            return{
                ...state,
                loading:false,
                tags: payload
            }    
        case GET_TAGS_ERROR:
            return {
                ...state,
                loading:false,
                error: payload
            }    
        case GET_USER_QUESTIONS_SUCCESS:
            return{
                ...state,
                loading:false,
                questions:payload
            }
        case GET_USER_QUESTIONS_ERROR:
            return {
                ...state,
                loading: false,
                error:payload
            }    
        default:
            return state        
    }
}