import styled from "styled-components";

const Select = styled.select.attrs({ name: "Selecione" })`
  background-color: var(--blue-logo);
  color: #fff;
  width: 200px;
  text-align: center;
  border: none;
  font-size: 16px;
  padding: 5px;

  option {
    background-color: #fff;
    border: 1px solid var(--blue-logo);
    color: var(--blue-logo);
  }
`;

export { Select };
