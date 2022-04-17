import styled from "styled-components";

const HeaderContainer = styled.header`
  padding: 2%;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border-bottom: 1px solid var(--blue-logo);
  margin-bottom: 50px;
  font-family: ;

  @media screen and (max-width: 769px) {
    height: 220px;
  }

  @media screen and (max-width: 480px) {
    height: 200px;
  }
`;

export { HeaderContainer };
