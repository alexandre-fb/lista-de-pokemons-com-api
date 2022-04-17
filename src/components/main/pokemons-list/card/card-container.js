import styled from "styled-components";

const CardContainer = styled.li`
  width: 190px;
  height: 220px;
  border: 1px solid var(--yellow-logo);
  box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  transition: all 200ms ease;

  &:hover{
    transform: scale(1.05);
    box-shadow: 5px 6px 7px rgba(0, 0, 0, 0.15);
  }
`;

export { CardContainer }
