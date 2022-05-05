import styled from "styled-components";

//==============Button================

export const Button = styled.button`
  width: 42px;
  height: 30px;
  border-radius: 15px;
  border: none;
  background-color: ${({ themeData }) => themeData.colors.blackToWhite};
  cursor: pointer;
  position: absolute;
  right: 0;
  bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px;

  @media screen and (max-width: 769px) {
    width: 35px;
    height: 24px;
    right: 50%;
    transform: translateX(50%);
  }

  @media screen and (max-width: 480px) {
    width: 30px;
    height: 21px;
  }
`;

//==============Selector================

export const Selector = styled.span`
  width: 67%;
  height: 100%;
  background-color: var(--blue-logo);
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 100ms ease-out;
  transform: translateX(${({ themeData }) => themeData.positionXSelector});
`;

//==============Icon================

 export const Icon = styled.i`
 display: flex;
 justify-content: center;
 align-items: center;
  width: 65%;
  color: #fff;
  
`; 

