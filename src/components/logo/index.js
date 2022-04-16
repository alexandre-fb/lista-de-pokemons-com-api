import styled from "styled-components";
import logoImage from '../../assets/images/logo-pokemon.png'

const Logo = styled.img.attrs({src: logoImage, alt: 'logo pokemon'})`
  max-width: 350px;
  margin: 0 20px;
`;

export { Logo }