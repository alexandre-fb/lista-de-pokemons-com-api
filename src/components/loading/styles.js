import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: center;
padding: 200px 0;
  

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
`;
