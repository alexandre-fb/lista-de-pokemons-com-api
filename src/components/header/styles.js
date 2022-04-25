import styled from "styled-components";
import logoImage from "../../assets/images/logo-pokemon.png";

//==============Container================

export const Container = styled.header`
  padding: 2%;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  border-bottom: 1px solid ${({ themeData }) => themeData.colors.blueToYellow};
  margin-bottom: 50px;

  a {
    width: 60%;
    height: 50%;
    display: flex;
    max-width: 350px;
    min-width: 220px;
  }

  @media screen and (max-width: 769px) {
    height: 220px;
  }

  @media screen and (max-width: 480px) {
    height: 200px;
  }
`;

//==============Logo================

export const Logo = styled.h1`
  width: 100%;
  background: url(${logoImage}) no-repeat center;
  background-size: contain;
  transition: transform 200ms ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;
