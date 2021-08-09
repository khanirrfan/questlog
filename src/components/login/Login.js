import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { login } from '../actions/auth'; 

import { Formik, Form } from 'formik';

import * as Yup from 'yup';

import TextFields from './TextFields';

const Login = ({login, isAuthenticated}) => {

    const validate = Yup.object({
        email: Yup.string().email('Email is invalid').required("Email is required"),
        password: Yup.string().min(6, 'Password must be at least 6 characters'),
    })

    if(isAuthenticated) {
        console.log("isAuthenticated", isAuthenticated);
        return <Redirect to ="/home" />
    }
    return (
         <div className="container mt-3">
        <div className="row">
          <div className="col-md-5"> 
        <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            validationSchema={validate}
            onSubmit={values => {
                login(values);
            }}
        >
            {formik => (
                <div>
                    <h1 className="my-4 font-weight-bold-display-4">Sign In</h1>

                    <Form>
                        <TextFields label="Email" name="email" type="email" />
                        <TextFields label="Password" name="password" type="passwrod" />
                        <button className="btn btn-dark mt-3" type="submit">Login</button>
                    </Form>
                </div>
            )}
        </Formik>
        </div>
        </div>
        </div>
    )
};

Login.propTypes = {
    login : PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    auth:PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    auth:state.auth,
})


export default connect(mapStateToProps, { login })(Login);