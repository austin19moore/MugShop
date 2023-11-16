import styled from "styled-components"

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background-image: url(sbpexels.jpg);
    background-size: cover;
`

export const Line = styled.div`
    background-color: gray;
    height: 34%;
    width: 1;
    color: gray;
`

export const LeftContainer = styled.div`
    width: 50%;
    min-height: 308px;
    
`

export const RightContainer = styled.div`
    width: 50%;
    min-height: 308px;
`

export const Wrapper = styled.div`
    width: 300px;
    height: 380px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px 0 black;
    backdrop-filter: blur(8.5px);
    border-radius: 10px;
    color: white;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    margin-left: 10px;
    margin-bottom: 5px;
`

export const Form = styled.form`
    display: row;
    margin: 7px 4px 0px 0px;
    padding: 7px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

export const Input = styled.input`
    flex: 1;
    margin: 2px;
    width: 150%;
    padding: 13px;
    font-size: 15px;
    font-weight: 100px;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0 8px 32px 0 black;
    outline: none;
    border: none;
    border-radius: 2rem;
    height: 3rem;

    &:focus {
        display: inline-block;
        box-shadow: 0 0 0 0.2rem white;
        backdrop-filter: blur(12rem)
        border-radius: 2rem;
    }
`

export const Button = styled.button`
    margin: 12px;
    padding: 10px;
    font-size: 13px;
    background-color: #00704A;
    cursor: pointer;
    color: white;
    transition: all .5s ease;
    border-radius: 15px;
    z-index: 4;
    margin-left: 5px;

    &:hover {
        transform: scale(1.1);
        background-color: #00704A;
        color: white;
    }

    &:disabled {
        cursor: not-allowed;
        color: #dd7973;
    }
`

export const Error = styled.span`
    color: red;
    display: row;
`