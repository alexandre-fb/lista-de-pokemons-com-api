import styled from "styled-components";
import imageButton from "../../assets/images/btn.svg";

const PrimaryButton = styled.button`
  width: 180px;
  height: 48px;
  padding-bottom: 4px;
  border: none;
  cursor: pointer;

  background: url(${imageButton}) no-repeat center;
  background-position: center bottom;
  background-size: contain;

  font-family: "Mansalva", cursive;
  font-size: 1.1rem;

  transform: rotate(-3deg);
  transition: transform 200ms ease;

  &:hover {
    transform: rotate(0deg) scale(1.05);
  }
`;

export { PrimaryButton };
