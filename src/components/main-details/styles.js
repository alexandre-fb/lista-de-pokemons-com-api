import styled from "styled-components";
import { Title } from "../title/title";
import { PrimaryButton } from "../primary-button";

//==============Container================

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  
`;


export const Image = styled.img`
    src: url(${props => props.src});
    width: 50%;
    max-width: 450px;
    min-width: 200px;
    margin-bottom: 50px;
    `

//==============Name================

export const Name = styled.h2.attrs({ as: Title })`
  font-size: 2rem;
  margin-bottom: 50px;
`;

//==============ButtonBackHome================

export const ButtonBackHome = styled.button.attrs({ as: PrimaryButton })`
  margin-bottom: 50px;
`;
