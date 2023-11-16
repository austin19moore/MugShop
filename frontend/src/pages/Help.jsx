import React from 'react';
import SubHeader from '../components/SubHeader';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {Container, EmptyContainer, InfoContainer, Info, Title, SubTitle, Question, Answer} from '../styles/Help.styles';


// Creating an faq page that has generic help, doesn't have to be dynamic just have
// something to show, look up some other faq pages to see what they have and replicate
const Help = () => {
    return(
        <Container>
            <Navbar/>
            <SubHeader/>
            <InfoContainer>
                <Title>Frequently Asked Questions</Title>
                <Info>
                    <SubTitle>Shipping</SubTitle><br/>
                    <Question>- How long will my order take to ship?</Question><br/>
                    <Answer>Your order will take 3-5 business days from the time of purchase to ship.</Answer><br/>
                    <Question>- Do you offer expedited shipping for your orders?</Question><br/>
                    <Answer>As of now we do not offer expedited shipping for any order.</Answer><br/>
                    <Question>- How long will my order take to arrive to my house?</Question><br/>
                    <Answer>The answer will vary depending on location. We ship using the United States Postal Service and expectation using ground shipping is 3-5 days shipping in the United States.</Answer><br/><br/>
                    <SubTitle>Orders</SubTitle><br/>
                    <Question>- Can I change my order.</Question><br/>
                    <Answer>If you want to change your order you can contact our business email at business@business.com.</Answer><br/>
                    <Question>- My order was wrong.</Question><br/>
                    <Answer>If you have a problem with your order you please contact our business email for further assistance.</Answer><br/>
                </Info>
            </InfoContainer>
            <EmptyContainer/>
            <Footer/>
        </Container>
    )
}


export default Help