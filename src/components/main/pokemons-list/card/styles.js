import styled from "styled-components";

//==============Container================

export const Container = styled.li`
  width: 190px;
  height: 220px;
  border: 1px solid var(--yellow-logo);
  box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  transition: all 200ms ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 5px 6px 7px rgba(0, 0, 0, 0.15);
  }
`;

//==============Image================

export const Image = styled.div`
  height: 55%;
  width: 80%;
  background: url("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/25.gif")
    center no-repeat;
  background-size: contain;
`;

//==============Name================

export const Name = styled.h2`
  font-family: "pokemon-font", "Permanent Marker", cursive;
  color: var(--blue-logo);
  width: 90%;
  line-height: 35px;
  text-align: center;
`;
