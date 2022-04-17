import styled from 'styled-components';
import imageButton from '../../assets/images/btn.svg'

const PrimaryButton = styled.button`
    width: 180px;
    height: 60px;
    background: url(${imageButton}) no-repeat center;
    background-position: center center;
    background-size: contain;
    border: none;
    transform: rotate(0deg); 
`

export { PrimaryButton }