import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getQuestions } from '../actions/question';
import moment from 'moment';

import { Link, NavLink } from 'react-router-dom';

const Main = ({ getQuestions, question: { questions } }) => {
    useEffect(() => {
        getQuestions();
    }, [])
    console.log("questions", questions);
    return (
        <Container>
            <Questions>
                <Content>
                    <Section>
                        <p>Top Questions</p>
                        <button>Ask Question</button>
                    </Section>
                    <RightSection>
                        <span>Interesting</span>
                        <span>Bountied</span>
                        <span>Hot</span>
                        <span>Week</span>
                        <span>Month</span>
                    </RightSection>
                </Content>
                {questions &&
                    questions.items.map((item, index) => {
                        return (
                            <>
                                <QuestionList>
                                    <SocialList>
                                        <Vote><span>{item.score}</span> <span>vote</span></Vote>
                                        <Answer><span>{item.answer_count}</span> <span> answer</span></Answer>
                                        <View><span>{item.view_count} </span> <span>views</span></View>
                                    </SocialList>
                                    <QuestionItem>
                                        <span>{item.bounty_amount} {item.title}</span>
                                    </QuestionItem>

                                </QuestionList>
                                <QuestionTags>
                                    <Tags>
                                         <Taglist>
                                            {
                                                item.tags.map(tags => {
                                                    return (
                                                        <li>{tags}</li>
                                                    )
                                                })
                                            }
                                        </Taglist>
                                    </Tags>
                                    <UserInfo>
                                       <Activity>{item.is_answered == true  ? `answered on ${moment.unix(item.last_activity_date).format("MMM/DD")}` : `modified on ${moment.unix(item.last_edit_date).format("MMM/DD")}`} </Activity>
                                       <User to ={`/userProfile/${item.owner.user_id}`} >{item.owner.display_name} </User> 
                                       <UserReputation>{item.owner.reputation}</UserReputation>
                                    </UserInfo>
                                </QuestionTags>
                            </>
                        )
                    })
                }


            </Questions>
        </Container>
    )
}

const Container = styled.div`
    grid-area: main;
`;
const Questions = styled.div`

    
`;

const Content = styled.div`
    max-width: 1528px;
    margin-left:auto;
    margin-right:auto;
    border-bottom:1px solid red;
`;
const Section = styled.section`
    display: flex;
    justify-content: space-between;
    color:#242729
`;

const RightSection = styled.div`
    display:flex;
    justify-content: flex-end;
    margin-top:1%;
    margin-bottom:15px;
    span {
        display:table-cell;
        border:1px solid #242729;
        border-collapse: collapse;
        padding:5px
    }
`;


const QuestionList = styled.div`
    display:flex;
    width:100%;
    min-width:250px;
    @media(max-width:768px){
        flex-direction:column
    };
`;

const SocialList = styled.div`
    width:25%;
    display: flex;
    justify-content:center;
    span {
        margin-left:10px;
        color:rgb(182 162 162);
        font-size:14px
    }
    @media(max-width:768px){
        display:flex;
    }
`;

const Vote = styled.div`
@media(max-widht:768px){
    display:flex;
}
`;
const Answer = styled.div`
@media(max-widht:768px){
    display:flex;
}
`;
const View = styled.div`
@media(max-widht:768px){
    display:flex;
}

`;
const QuestionItem = styled.div`

margin-left:10px;
    span {
        color:rgb(134 203 249);
        font-size:16px;
        text-align:justify;
    }
`;

const QuestionTags = styled.div`
    display:flex;
    justify-content:space-between;
    margin-top : 10px;
    border-bottom:1px solid red;
`;

const Tags = styled.div`
margin-bottom:10px;
span {
    margin-left:10px;
    background-color:rgb(225 236 244);
    border-radius:4px;
    padding:5px;
    margin-top:5px;

}
`;

const Taglist = styled.ul`
    display:flex;
    margin-left:0px;
    li {
        margin-left:10px;
        background-color:rgb(225 236 244);
        border-radius:4px;
        padding:5px;
        margin-top:5px;
        list-style:none;
    }
`;
const UserInfo = styled.div`
    justify-content:flex-end;
`;

const Activity = styled(Link)`
    text-decoration:none;
    cursor:pointer;
`;
const User = styled(NavLink)`
    text-decoration:none;
    cursor:pointer;
`;
const UserReputation = styled.span``;
Main.propTypes = {
    getQuestions: PropTypes.func.isRequired,

}

const mapStateToProps = state => ({
    question: state.question
});

export default connect(mapStateToProps, { getQuestions })(Main);