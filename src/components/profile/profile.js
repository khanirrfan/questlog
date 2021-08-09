import React, {useEffect} from 'react'

import UserDetail from './userDetail';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { getProfile, getTags, getQuestions } from '../actions/userDetails';


const Profile = ({getProfile, getTags, getQuestions, userDetails, match}) => {
console.log(userDetails);
    useEffect(() => {
        getProfile(match.params.id);
        getTags(match.params.id);
        getQuestions(match.params.id);
    }, [getProfile, getTags, getQuestions,match.params.id])
    return (
        <Container>
        <Content>
            <Layout>
            { userDetails &&
                <UserDetail userInfo = {userDetails} />
            }
            </Layout>
            </Content>
        </Container>
    )
}

const Container = styled.div`
    padding-top:24px;
    max-width: 100%;
`;
const Content = styled.div`
    max-width: 1528px;
    margin-left:auto;
    margin-right:auto;
`;

const Layout = styled.div`
    display: grid;
    grid-template-areas: "leftside userDetail rightside";
    grid-template-columns: minmax(0, 5fr) minmax(0, 15fr) minmax(300px, 7fr);
    column-gap: 25px;
    row-gap: 25px;
    grid-template-rows: auto;
    margin:25px;
    
    @media(max-width:768px){
        display: flex;
        flex-direction: column;
        padding:5px;
    }
`;
Profile.propTypes = {
    getProfile: PropTypes.func.isRequired,
    getTags:PropTypes.func.isRequired,
    getQuestions: PropTypes.func.isRequired,
    userDetails: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    userDetails: state.userDetails,
    
})
export default connect(mapStateToProps, { getProfile, getTags, getQuestions})(Profile);
