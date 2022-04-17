import styled from "styled-components";

const ListOfCards = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 20px;
  justify-content: space-evenly;

  @media screen and (max-width: 1220px) {
    grid-template-columns: repeat(4, auto);
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, auto);
  }

  @media screen and (max-width: 769px) {
    grid-template-columns: repeat(2, auto);
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, auto);
  }
`;

export { ListOfCards };
