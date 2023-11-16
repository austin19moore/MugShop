import styled from "styled-components";

export const Container = styled.div`
    
`

export const Header = styled.h1`
    margin: 20px;
`

export const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Filter = styled.div`
    margin: 20px;
`
export const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`

export const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    border-radius: 20px;
`

export const EmptyContainer = styled.div`
    padding: 300px;
`

export const Option = styled.option`

`

export const AdminBar = styled.div`
    width: 180px;
    height: wrap_content;
    padding: 10px;
    margin-left: 10px;
    border: 1px solid;
    border-radius: 5px;
    background-color: white;
`

export const AdminButton = styled.button`
    width: wrap-content;
    height: wrap-content;
    margin-left: 10px;
    padding: 10px;
    color: white;
    background-color: #00704a;
    border: 1px solid;
    border-radius: 5px;
    font-size: 12pt;
`

export const Button = styled.button`
    width: wrap-content;
    height: wrap-content;
    margin-top: 10px;
    padding: 5px;
    border: 1px solid;
    background-color: white;
    cursor: pointer;
    transition: all .5s ease;
    border-radius: 5px;
    font-size: 12px;

    &:hover {
        transform: scale(1.1);
        background-color: black;
        color: white;
    }
`

export const ItemContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ProductContainer = styled.div`
    width: 85vw;
    align-items: center
    justify-content: center;
`