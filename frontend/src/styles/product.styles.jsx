import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  padding: 20px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`;

export const Image = styled.img`
  height: 220px;
  object-fit: contain;
  width: 11vw;
`;

export const Info = styled.div`
  width: 100%;
  text-align: center;
  padding: 10px;
`;

export const Title = styled.h2`
  font-size: 18px;
  margin: 10px 0;
`;

export const Price = styled.p`
  font-size: 16px;
`;

export const Quantity = styled.p`
  font-size: 16px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #00704a;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #006400;
  }
`;