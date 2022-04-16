import styled from "styled-components";
import logoImage from '../../assets/images/logo-pokemon.png'

const Logo = styled.h1`
  width: 60%;
  max-width: 350px;
  min-width: 220px;
  height: 100%;
  background: url(${logoImage}) no-repeat center;
  background-size: contain;
`;

export { Logo }