import styled from "styled-components";
import { PrimaryButton } from "../../primary-button";
import { Title } from "../../title/title";

//==============Container================

export const Container = styled.section`
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

//==============ListOfCards================

export const ListOfCards = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 20px;
  justify-content: space-evenly;
  margin-bottom: 50px;

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

//==============Card================

export const Card = styled.li`
  width: 190px;
  height: 220px;
  border: 1px solid var(--yellow-logo);
  box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: all 200ms ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 5px 6px 7px rgba(0, 0, 0, 0.15);
  }

  a {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    
  }
`;

//==============Image================

export const Image = styled.img`
  src: url(${(props) => props.src});
  width: 80%;
  height: 45%;
  object-fit: contain;
`;

//==============Name================

export const Name = styled.h2.attrs({ as: Title })`
  width: 90%;
`;

//==============ShowMoreButton================

export const ShowMoreButton = styled.button.attrs({ as: PrimaryButton })``;
