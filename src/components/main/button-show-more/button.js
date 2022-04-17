import styled from 'styled-components'
import { PrimaryButton } from '../../primary-button'

const Button = styled(PrimaryButton).attrs({ as: 'button' })`

    cursor: pointer;
    transition: transform 200ms ease;
    

    &:hover{
        transform: rotate(4deg) scale(1.05);
    }

    p {
        transform: rotate(-4deg); 
        font-family: 'Mansalva', cursive;
        font-size: 1.1rem;
    }

    
`
export { Button }