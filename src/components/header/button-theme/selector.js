import styled from 'styled-components'

const Selector = styled.span`
  width: 67%;
  height: 100%;
  background-color: var(--blue-logo);
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 100ms ease-out;
  transform: translateX(${(props)=>props.positionXSelector}); 
`;

export { Selector }