import styled from "styled-components";
import pokeball from "../../assets/images/pokeball.png";

export const Loading = styled.img.attrs({ src: pokeball })`
  animation: opacity 0.2s ease running, scale 1.5s ease infinite running alternate ;
  padding: 200px 0;

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
        transform: scale(0.30);
      }
      to {
        transform: scale(0.33);
      }
    }
`;

// export const Container = styled.main`
//   display: flex;
//   flex-direction: column;
//   align-items: center;

// `;
