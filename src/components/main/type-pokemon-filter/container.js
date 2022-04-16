import styled from "styled-components";

const Container = styled.section`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    gap: 5px;
  }
`;

export { Container };
