import styled from "styled-components";

export const Container = styled.div`
    width: 60%; /* Adjust the width as needed */
    height: 50vh;
    display: flex;
    position: relative;
    overflow: hidden;
`

export const Wrapper = styled.div`
    height: 50vh;
    display: flex;
    transition: all 1.0s ease;
    transform: translateX(${props => props.slideIndex * -100}vw);
`


export const SlideContainer = styled.div`
    width: 60vw; /* Adjust the width as needed */
    height: 50%;
    display: flex;
    align-items: center;
    background-color: #${props => props.bg};
`

export const ImageContainer = styled.div`
    flex: 1;
    height: 100%; /* To fill the entire height of SlideContainer */
    transform: translateZ(0);
`

export const InfoContainer = styled.div`
    flex: 1;
    padding: 10px; /* Reduced padding to make it smaller */
    text-align: center;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 20%; /* Adjust the positioning as needed */
    z-index: 3;
`

export const Title = styled.h1`
    font-size: 24px; /* Adjust font size as needed */
    color: white;
    background-color: rgba(52, 52, 52, 0.2);
`

export const Description = styled.p`
    margin: 10px 0px; /* Adjust margin as needed */
    font-size: 16px; /* Adjust font size as needed */
    font-weight: 500;
    letter-spacing: 1px;
    color: white;
    background-color: rgba(52, 52, 52, 0.2);
`

export const Button = styled.button`
    padding: 8px; /* Adjust padding as needed */
    font-size: 14px; /* Adjust font size as needed */
    cursor: pointer;
    color: black;
    background-color: white;
    border-color: transparent;
    border-radius: 15px;

    &:hover {
        transform: scale(1.03);
    }
`

export const Image = styled.img`
    max-height: 100%;
    max-width: 100%;
    object-fit: contain; /* or object-fit: cover; depending on your preference */
`;