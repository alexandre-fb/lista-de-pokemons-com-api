import { createGlobalStyle } from "styled-components";
import PokemonFont from "../assets/fonts/pokemon-font.ttf";

export const Styles = createGlobalStyle`

@font-face {
  font-family: 'pokemon-font';
  src: url(${PokemonFont}) FORMAT('truetype');
}

* {
  margin: 0;
  padding: 0;
  --blue-logo: #3d51ab;
  --yellow-logo: #FAC705;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
    font-weight: 300;
    list-style: none;
    font-style: none;
}

html {
  width: 100%;
  height: 100%;
}

body {
  max-width: 1920px;
  margin: 0 auto;
  background-color: ${({ themeData }) => themeData.colors.whiteToBlack};
  padding: 0 10%;
}

a {
  text-decoration: none;
}
`;
