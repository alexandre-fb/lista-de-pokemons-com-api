import styled from "styled-components";
import imageBackgroundTitle from "../../../assets/images/backgroun-title-data-detail.svg";

//==============Container================

export const Container = styled.section`
  width: 100%;
  margin-bottom: 50px;
  display: grid;
  gap: 50px;
  grid-template-areas:
    "types moves"
    "abilities moves";
  grid-template-columns: 1fr 2fr;

  .types {
    grid-area: types;
  }
  .moves {
    grid-area: moves;
  }
  .abilities {
    grid-area: abilities;
  }

  @media screen and (max-width: 769px) {
    grid-template-areas:
      "types"
      "abilities"
      "moves";
    grid-template-columns: auto;
  }
`;

//========DataBox==========

export const DataBox = styled.article`
  width: 100%;
  /* height: 200px; */
  border: 1px solid var(--blue-logo);
  position: relative;
  padding: 30px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    width: 125px;
    height: 40px;
    background: url(${imageBackgroundTitle}) no-repeat center;
    background-size: contain;
    position: absolute;
    top: -19px;
    font-family: "Mansalva", cursive;
    text-align: center;
    line-height: 36px;
  }

  p {
    font-family: "Mansalva", cursive;
    font-size: 1.1rem;
    text-align: center;
    text-transform: capitalize;
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-content: center;

    li {
      font-family: "Mansalva", cursive;
      font-size: 1.1rem;
      text-align: center;
      text-transform: capitalize;

      h4 {
        font-family: "Mansalva", cursive;
      }

      p {
        font-size: 0.8rem;
        margin-bottom: 10px;
        font-family: roboto;
        text-transform: none;
      }
    }
  }
`;
