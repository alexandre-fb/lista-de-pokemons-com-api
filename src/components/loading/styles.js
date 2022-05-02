import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 200px 0;

  p {
    color: ${({ themeData }) => themeData.colors.blackToWhite};
  }

  img {
    width: 50px;

    animation: opacity 0.3s ease running,
      scale 1s ease infinite running alternate;

    @keyframes opacity {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes scale {
      from {
        transform: scale(1);
      }
      to {
        transform: scale(1.2);
      }
    }
  }

  p {
    color: ${({ themeData }) => themeData.colors.blackToWhite};
  }
`;
