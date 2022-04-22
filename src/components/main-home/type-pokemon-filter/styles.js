import styled from "styled-components";

//==============Container================

export const Container = styled.section`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    gap: 5px;
  }
`;

//==============InputTypeText================

export const InputTypeText = styled.input.attrs({
  type: "text",
  placeholder: "Digite o tipo de pokemon",
})`
  border: 1px solid var(--blue-logo);
  background-color: #efefef;
  width: 200px;
  text-align: center;
  padding: 5px;
  font-size: 16px;

  ::placeholder {
    color: #666;
  }
`;

//==============Select and Options================

export const Select = styled.select`
  background-color: var(--blue-logo);
  color: #fff;
  width: 200px;
  text-align: center;
  border: none;
  font-size: 16px;
  padding: 5px;
  cursor: pointer;

  option {
    background-color: #fff;
    border: 1px solid var(--blue-logo);
    color: var(--blue-logo);
  } 
`;