import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import moment from 'moment';

import { Link, NavLink } from 'react-router-dom';
const UserDetail = ({ userInfo: { profile, tags, questions } }) => {
    console.log("userInfo", tags);
    return (
        <Container>
            User Details
            {profile &&
                profile.items.map((item, index) => {

                    return (
                        <ProfileContent>
                            <ProfileImageDetails>
                                <Image src={`${item.profile_image}`} alt="">
                                </Image>
                                <ProfileDetails>
                                    <Upper>
                                        <Reputations><span>{item.reputation}</span> <span>reputations</span></Reputations>
                                        <Reached><span>456</span> <span>reached</span></Reached>
                                    </Upper>
                                    <Lower>
                                        <Answers><span>456</span> <span>answers</span></Answers>
                                        <Questions><span>456</span> <span>questions</span></Questions>
                                    </Lower>
                                </ProfileDetails>
                                <Medals>
                                    <li>{item.badge_counts.gold} Gold</li><li>{item.badge_counts.silver} Silver</li><li>{item.badge_counts.bronze} Bronze</li>
                                </Medals>
                            </ProfileImageDetails>
                            <ProfileSummary>
                                <h4>{item.display_name}</h4>
                                <span>Title</span>
                                <ProfileInfo>
                                    <InfoItems>
                                        <li>{item.location}</li>
                                        <li>github link</li>
                                        <li>{item.website_url}</li>
                                    </InfoItems>
                                </ProfileInfo>
                                <About>Aspiring coder</About>
                            </ProfileSummary>
                        </ProfileContent>
                    )
                })
            }
            {/* <CommunityContent>

                <Communities>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                </Communities>
                <Badges>

                    
                            <Gold>Gold</Gold>
                            <Silver>Silver</Silver>
                            <Bronze>Bronze</Bronze>
                           
                </Badges>
            </CommunityContent> */}
            <TagsContent>
                {tags  && <span>Top Tags ({tags.items.length})</span>}
                {tags &&
                    tags.items.map((item, index) => {
                        return (
                            <TagList>
                                <li>{item.name} - {item.count}</li>
                            </TagList>
                        )
                    })
                }
            </TagsContent>
            <PostContent>
                 <span>Top Questions</span>
                { questions &&
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
            </PostContent>
        </Container>
    )
}
const Container = styled.div`
    grid-area: userDetail;
`;

const ProfileContent = styled.div`
    display: flex;
`;

const ProfileImageDetails = styled.div`
    width:30%;
    margin-right:1%;
    height:100%;

    border:1px solid red;
`;

const ProfileSummary = styled.div` 
    width:69%;
    height:100%;

    border:1px solid red;
`;

const Image = styled.img`
    width:100%;
    border:1px solid blue;
`;

const ProfileDetails = styled.div`
    margin:5px
`;

const Upper = styled.div`
    display:flex;
    justify-content: space-between;
`;
const Lower = styled.div`
display:flex;
justify-content: space-between;
`;
const Reputations = styled.div`
display:column;
    width:80px;

`;
const Reached = styled.div`
    display:column;
    width:80px;`;

const Answers = styled.div`
display:column;
width:80px;`;
const Questions = styled.div`
display:column;
width:80px;`;

const Medals = styled.ul`
    display:flex;
    list-style:none;
    padding:0;
    li {
        border:1px solid red;
        border-radius:4px;
        padding:5px;
        margin:auto
    }
`;
const ProfileInfo = styled.div``;
const InfoItems = styled.ul`
    padding:0;
    list-style:none;
`;
const About = styled.div``;

// const CommunityContent = styled.div`
//     margin: 10px 0;
//     display:flex;
//     border:1px solid blue;
// `;
// const Communities = styled.div`
//     list-style:none;
//     width:25%
// `;
// const Badges = styled.div`
//     display:flex;
//     flex-direction:row;

// `;
// const Gold = styled.div`
//     width:100%;
//     border:1px solid black;
// `;
// const Silver = styled.div`
// width:100%;
// border:1px solid black;
// `;
// const Bronze = styled.div`
// width:100%;
// border:1px solid black;
// `;

const TagsContent = styled.div`
margin:10px 0;
    display:column;
    border:1px solid blue;
    span{margin:15px}
`;

const TagList = styled.ul`
display:column;
list-style:none;
padding:0;
margin:10px;

li {
    border:1px solid red;
    border-radius:4px;
    padding:5px;
    margin:auto
}
`;

const PostContent = styled.div`
    display:column;
    border:1px solid blue;
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



export default UserDetail;
