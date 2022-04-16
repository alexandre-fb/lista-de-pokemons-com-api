import styled from "styled-components";

const InputTypeText = styled.input.attrs({
  type: "text",
  placeholder: "Digite o tipo de pokemon",
  placeholderTextColor: "red",
})`
  border: 1px solid var(--blue-logo);
  background-color: #efefef;
  width: 200px;
  text-align: center;
  padding: 3px 5px;
  font-size: 16px;

  ::placeholder {
    color: #666;
  }
`;
export { InputTypeText };
