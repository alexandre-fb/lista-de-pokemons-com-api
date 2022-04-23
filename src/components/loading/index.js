import styled from "styled-components";
import pokeball from "../../assets/images/pokeball.png";

export const Loading = styled.img.attrs({ src: pokeball })`
  animation: opacity 0.2s ease running,
    scale 1.5s ease infinite running alternate;

  padding: 100px 0;

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
      transform: scale(0.2);
    }
    to {
      transform: scale(0.22);
    }
  }
`;
