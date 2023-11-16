import styled from "styled-components";
import { mobile } from "../components/responsive";
import { Link } from "react-router-dom";
import StarbucksLogo from "../starbuckslogo.png";

export const Container = styled.nav`
  position: sticky;
  top: 0;
  z-index: 999;
  height: 10%;
  width: 100%;
  background-color: #00704a;
  color: #fff;
  ${mobile({ height: "50px" })}
`;

export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 0px 11px;
`;

export const Logo = styled.div`
  width: 120px;
  height: 40px;
  background-image: url(${StarbucksLogo});
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
`;

export const SearchContainer = styled.div`
  border: .5px solid lightgray;
  border-radius: 20px;
  display: flex;
  align-items: center;
  width: 360px;
  height: 24px;
  margin-left: 25px;
  padding: 5px;
  background: #f2f2f2;
  transition: all .3s ease;
  ${mobile({ width: "80px" })}
`;

export const Input = styled.input`
  border: none;
  height: 100%;
  width: 100%;
  color: gray;
  outline: none;
  font-size: 16px;
  background-color: transparent;
  ${mobile({ width: "50px" })}
`;

export const Center = styled.div`
  display: flex;
  text-align: center;
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Menu = styled.div`
  font-size: 16px;
  cursor: pointer;
  margin-left: 20px;
  padding: 0px;
  display: flex;
`;

export const MenuLink = styled(Link)`
  color: #fff;
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export const Line = styled.div`
  background-color: lightgray;
  margin: 0px 5px;
  height: 100%;
  padding: 1px;
  color: gray;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  margin-left: 10px;
  margin-bottom: 5px;
`;

export const Button = styled.button`
  padding: 10px;
  font-size: 12px;
  background-color: transparent;
  cursor: pointer;
`;