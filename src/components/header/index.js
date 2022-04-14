import styled from "styled-components";
import logoPokemon from "../../assets/images/logo-pokemon.png";
import { ThemeButton } from "./theme-button";

const Header = () => {
  return (
    <StyledHeader>
        <Logo src={logoPokemon} alt="Logo"></Logo>
        <ThemeButton />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  padding: 50px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const Logo = styled.img`
  color: red;
  font-family: pokemon;
  min-width: 250px;
`;

export { Header };
