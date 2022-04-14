import styled from "styled-components";

const Divisor = () => {
  return <StyledDivisor />;
};

const StyledDivisor = styled.hr`
  height: 1px;
  border: none;
  background-color: var(--blue-logo);
`;

export { Divisor };
