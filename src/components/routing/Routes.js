import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Home from '../home/home';
import Profile from '../profile/profile';

const Dashboard = ({ auth:{user} }) => {
    return (
        <div>
            <Switch>
                <Route exact path ="/home" component = {Home} />
                <Route path = {"/userProfile/:id"} component = {Profile} />
            </Switch>
        </div>
    )
}

Dashboard.propTypes = {
    auth:PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth:state.auth,
})

export default connect(mapStateToProps)(Dashboard)
