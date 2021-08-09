import React from 'react';

import styled from 'styled-components';
import Main from './main';

const Home = () => {
    return (
        <Container>
        <Content>
            
            <Layout>
                <Main />
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
const Section = styled.section`
    display: flex;
    justify-content: space-between;
    
    margin:0 20px

`;

const Layout = styled.div`
    display: grid;
    grid-template-areas: "leftside main rightside";
    grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
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


export default Home