import styled from "styled-components"

export const Container = styled.div`
  border: 3px solid #006241;
  border-radius: 25px;
  min-height: 100px;
  width: 80vw;
  padding: 0px;
  margin: 5px;
  overflow: hidden;
`

export const TopContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 15px;
  justify-content: space-around;
  background: #00754A;
  border-bottom: 1px solid #00754A;
`

export const TopInfo = styled.span`

`

export const MiddleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: left;
`

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  margin: 5px;
`

export const ProductInfo = styled.span`
  justify-content: space-around;
`

export const ProductImg = styled.img`
  width: 320px;
  height: 320px;
`

export const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 15px;
  justify-content: space-around;
  background: #d4e9e2;
  border-top: 1px solid gray
`

export const EmptyContainer = styled.div`
  height: 40px;
  width: 100%;
`