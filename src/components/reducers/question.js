import { QUESTION_SUCCESS, QUESTION_ERROR } from "../actions/types";

const initialState = {
    questions: null,
    questionsList:[],
    loading:true,
    error:{}
}

export default function(state = initialState, action) {
    const {type, payload} = action;

    switch(type) {
        case QUESTION_SUCCESS:
            return {
                ...state,
                questions: payload, 
                loading:false
            }
        case QUESTION_ERROR:
            return {
                ...state,
                error:payload,
                loading:false
            }    
        default:
            return state;
    }
}