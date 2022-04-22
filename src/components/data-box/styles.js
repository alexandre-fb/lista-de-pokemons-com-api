import styled from 'styled-components';
import imageBackgroundTitle from '../../assets/images/backgroun-title-data-detail.svg';

//========Container==========
export const Container = styled.article`
    width: 45%;
    /* height: 200px; */
    border: 1px solid var(--blue-logo);
    position: relative;
    padding: 30px 20px 20px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

//========Title==========
export const Title = styled.h3`
    width: 125px;
    height: 40px;
    background: url(${imageBackgroundTitle}) no-repeat center;
    background-size: contain;
    position: absolute;
    top: -19px;
    font-family: "Mansalva",cursive;
    text-align: center;
    line-height: 36px;
`

//========List==========
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: center;

  li {
    font-family: "Mansalva", cursive;
    font-size: 1.1rem;
  }
`;

