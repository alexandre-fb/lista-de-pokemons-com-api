import styled from "styled-components";
import { FaRegMoon } from "react-icons/fa";

//==============Button================

const widthValue = {
  mobile: 30,
  tablet: 35,
  desktop: 42
};

const heightValue = {
  mobile: widthValue.mobile * 0.7,
  tablet: widthValue.tablet * 0.7,
  desktop: widthValue.desktop * 0.7
};

export const Button = styled.button`
  width: ${widthValue.desktop}px;
  height: ${heightValue.desktop}px;
  border-radius: 15px;
  border: none;
  background-color: black;
  cursor: pointer;
  position: absolute;
  right: 0;
  bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px;

  @media screen and (max-width: 769px) {
    width: ${widthValue.tablet}px;
    height: ${heightValue.tablet}px;
    right: 50%;
    transform: translateX(50%);
  }

  @media screen and (max-width: 480px) {
    width: ${widthValue.mobile}px;
    height: ${heightValue.mobile}px;
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
  transform: translateX(${(props)=>props.positionXSelector}); 

  &
`;

//==============MoonIcon================

export const MoonIcon = styled(FaRegMoon)`
    width: 65%;
    color: #fff;
`