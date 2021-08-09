import axios from 'axios';

import { LOGIN, ERROR_LOGIN } from './types';

// LOGIN

export const login = ({email, password}) => dispatch => {
    const config = {
        headers:{
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({email, password});

    try{
        // const res = {}
        // const err = "user not logged in"
        dispatch({
            type:LOGIN,
            payload:{'username':'irrfan13', "email":'irrfan13@gmail.com'}
        });
    } catch(err){

        // const errors = err;
    }
}