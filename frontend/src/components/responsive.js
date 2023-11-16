import {css} from "styled-components";

// Going to be used for mobile responsiveness

export const mobile = (props) =>{
    return css`
    @media only screen and (max-width: 640px){
        ${props}
    }
    `
}