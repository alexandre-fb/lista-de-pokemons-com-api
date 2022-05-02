import styled from "styled-components";

//==============Container================

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    margin: 20px 0;
    font-weight: 700;
    color: var(--blue-logo);
    font-size: 1.2rem;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

//==============PokemonTypeName================

export const PokemonTypeName = styled.h2`
  margin-top: 50px;
  color: ${({ themeData }) => themeData.colors.blueToYellow};
  font-size: 1.3rem;
`;
