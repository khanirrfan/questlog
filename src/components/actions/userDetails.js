import axios from 'axios';

import { GET_PROFILE, ERROR_PROFILE, GET_TAGS_SUCCESS, GET_TAGS_ERROR, GET_USER_QUESTIONS_SUCCESS, GET_USER_QUESTIONS_ERROR } from './types';

// GET USER DETAILS
export const getProfile = (id) => async dispatch => {
    try {
        const res = await axios.get(`https://api.stackexchange.com/2.3/users/${id}?order=desc&sort=reputation&site=stackoverflow`);
        console.log(res);
        dispatch({
            type:GET_PROFILE,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type:ERROR_PROFILE,
            payload:{msg: error.response.statusText, status: error.response.status}
        })
    }
}

// GET TAGS

export const getTags = (id) => async dispatch => {
    try {
        const res = await axios.get(`https://api.stackexchange.com/2.3/users/${id}/tags?order=desc&sort=activity&site=stackoverflow`);
        console.log(res);
        dispatch({
            type: GET_TAGS_SUCCESS,
            payload:res.data
        })
    } catch (error) {
        dispatch({
            type:GET_TAGS_ERROR,
            payload:{msg:'error'}
        })
    }
}

// GET QUESTIONS

export const getQuestions = (id) => async dispatch => {
    try {
        const res = await axios.get(`https://api.stackexchange.com/2.3/users/${id}/questions?order=desc&sort=activity&site=stackoverflow`);
        console.log("res:", res);
        dispatch({
            type:GET_USER_QUESTIONS_SUCCESS,
            payload: res.data
        })
    } catch (error) {
            dispatch({
                type:GET_USER_QUESTIONS_ERROR,
                payload: {msg: 'ERROR'}
            })        
    }
}