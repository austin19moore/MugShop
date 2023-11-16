import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    font-size: 14px;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-family: 'Khand', sans-serif;
`

export const Logo = styled.div`
    width: 240px;
    height: 80px;
    padding: 35px;
    text-align: center;
    margin-left: 175px;
    justify-content: center;
    background-image: url(https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Starbucks_Coffee_Logo.svg/225px-Starbucks_Coffee_Logo.svg.png);
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
`;

export const Wrapper = styled.div`
    width: 500px;
    height: 470px;
    overflow: hidden;
    border-radius: 12px;
    border: thin solid #ddd;
`

export const TopContainer = styled.div`
    width: 100%;
    color: white;
    overflow: hidden;
    min-height: 250px;
    position: relative;
    padding: 40px 0;
    background: rgb(0,0,0);
    background: -webkit-linear-gradient(45deg, #019871, #a0ebcf);
`

export const TopText = styled.h1`
    font-size: 2.25rem;
    display: block;
    font-weight: 500;
    letter-spacing: 0.15rem;
    text-shadow: 0 2px rgba(128, 128, 128, 0.6);
`

export const BottomContainer = styled.div`
    align-items: center;
    padding: 25px;
`

export const BottomText = styled.p`
    font-weight: 500;
    font-size: 1.05rem;
    margin-bottom: 20px;
`

export const Button = styled.button`
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 12px;            
    padding: 10px 18px;            
    background-color: #019871;
    text-shadow: 0 1px rgba(128, 128, 128, 0.75);

    &:hover {
        background-color: #85ddbf;
    }
`