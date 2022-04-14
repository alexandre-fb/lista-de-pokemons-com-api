import styled from 'styled-components'

const Selector = styled.span`
  width: 25px;
  height: 25px;
  background-color: var(--blue-logo);
  border-radius: 100%;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  transition: 100ms ease-out;
  transform: translateX(${(props)=>props.translate}px);
`;

export { Selector }