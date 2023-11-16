import styled from "styled-components";

export const Container = styled.div`

`

export const ImageContainer = styled.div`
    height: 100vh;
    display: flex;
    overflow: hidden;
    position: relative;
`

export const Image = styled.img`
    height: 85%;
    width: 100%;
    object-fit: cover;
`

export const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
    margin: 350px 0px;
    text-align: left;
    justify-content: center;
    position: absolute;
    z-index: 3;
`

export const Title = styled.h1`
    font-size: 70px;
    color: white;
`

export const Info = styled.span`
    margin: 50px 0px;
    font-size: 30px;
    font-weight: 500;
    letter-spacing: 2px;
    color: white;
`

export const Button = styled.button`
    padding: 10px;
    margin: 10px 0px;
    font-size: 18px;
    border-radius: 10px;
    cursor: pointer;
    color: black;
    background color: white;
`

export const AboutUs = styled.div`
    display: flex;
    width: 90vw;
    flex-direction: row;
    text-align: center;
`

export const DescriptionContainer = styled.div`
    align-items: center;
    justify-content: center;
    text-align: center;
`

export const DescTitle = styled.h1`
    color: black; 
    font-size: 40px;
    text-decoration: underline;
    position: center;
    text-align: center;
`

export const Description = styled.span`
    color: black; 
    font-size: 25px;
    align-items: center;
    justify-content: center;
    text-align: center;
    
`

export const SmallImage = styled.img`
   padding: 100px;
`

export const EmptyContainer = styled.div`
    height: 30px;
    width: 100%;
`