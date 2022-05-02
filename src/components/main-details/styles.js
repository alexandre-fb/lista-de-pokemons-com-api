import styled from "styled-components";
import { Title } from "../title/index.js";

//==============Container================

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  img {
    width: 50%;
    max-width: 450px;
    min-width: 200px;
    margin-bottom: 50px;
  }
`;

//==============Name================

export const Name = styled.h2.attrs({ as: Title })`
  font-size: 2rem;
  margin-bottom: 50px;
  color: ${({ themeData }) => themeData.colors.blueToYellow};
`;
