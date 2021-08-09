import axios from 'axios';
import { QUESTION_SUCCESS, QUESTION_ERROR } from '../actions/types';

// GET ALL QUESTIONS

export const getQuestions = () => async dispatch => {
    try{
        const res = await axios.get(`https://api.stackexchange.com/2.3/questions/featured?order=desc&sort=activity&site=stackoverflow`);
        // console.log("res:", res);
        dispatch({
            type:QUESTION_SUCCESS,
            payload:res.data
        })
    } catch(err){
        dispatch({
            type: QUESTION_ERROR,
            payload: {status:err.response.status, msg: err.response.statusText}
        })
    }
};