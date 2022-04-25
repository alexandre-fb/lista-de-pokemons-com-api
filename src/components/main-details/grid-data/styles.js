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
  border: 1px solid ${({ themeData }) => themeData.colors.blueToYellow};
  position: relative;
  padding: 30px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-content: center;
     

    li {
      text-align: center;
      color: ${({ themeData }) => themeData.colors.blackToWhite};
      
      

      h4 {
        font-family: "Mansalva", cursive;
        font-size: 1.1rem;
        text-transform: capitalize;
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

export const Title = styled.h3`
  width: 125px;
  height: 40px;
  background: url(${imageBackgroundTitle}) no-repeat center;
  background-size: contain;
  position: absolute;
  top: -19px;
  font-family: "Mansalva", cursive;
  text-align: center;
  line-height: 36px;
`;

export const MovesContent = styled.p`
  font-family: "Mansalva", cursive;
  font-size: 1rem;
  text-align: center;
  text-transform: capitalize;
  color: ${({ themeData }) => themeData.colors.blackToWhite};
`;
