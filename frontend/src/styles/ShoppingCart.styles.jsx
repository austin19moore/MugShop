import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`

`

export const Wrapper = styled.div`
    padding: 20px;
`

export const Top = styled.div`
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const TopTexts = styled.div`

`

export const TopText = styled.span`
    textDecoration: underline;
    margin: 0px 10px;
`

export const Title = styled.h1`
    font-weight: 300;
    text-align: center;
    padding: 10px;
`

export const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Info = styled.div`
    flex: 3;
`

export const Product = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 35px;
`

export const ProductInfo = styled.div`
    flex: 2;
    display: flex;
`

export const Image = styled.img`
    width: 320px;
`

export const ProductDetails = styled.span`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export const ProductName = styled.span`

`

export const ProductID = styled.span`

`

export const ProductPrice = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const PriceContainer = styled.div`
    display: flex;
    align-items: center;
`

export const Quantity = styled.span`
    font-size: 24px;
    margin: 5px;
`

export const Price = styled.span`
    font-size: 30px;
    font-weight: 200px;
`

export const Hr = styled.hr`
    padding: 10px;
    background-color: transparent;
    border: none;
    height: 1px;
`

export const SmallLine = styled.hr`
    background-color: darkgray;
    border: none;
    width: 100%;
    height: 1px;
`

export const CartSummary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 43vh;
`

export const SummaryTitle = styled.h1`
    font-weight: 200;

`

export const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "20px"};
`

export const SummaryItemText = styled.span``

export const SummaryItemPrice = styled.span``

export const Button = styled.button`
    width: 100%;
    padding: 10px;
    font-weight: 600;
    background-color: #00704A;
    border-color: black;
    cursor: pointer;
    transition: all .5s ease;
    border-radius: 15px;
    z-index: 4;

    &:hover {
        transform: scale(1.05);
        background-color: #006400;
    }
`

export const EmptyContainer = styled.div`
    padding: 150px;
`

export const Line = styled.hr`
    color: black;
`

export const ButtonLink = styled(Link)`
    color: white;
    text-decoration: none;
`

export const Input = styled.input`
    border: light;
    height: 50%;
    width: 100%;
    color: gray;
    font-size: 16px;
    background-color: transparent;
`

export const Error = styled.span`
    color: red;
    display: row;
`