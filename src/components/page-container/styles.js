import styled from 'styled-components';

export const Container = styled.div`
    background-color: blue;
    background-color: ${({ themeData }) => themeData.colors.whiteToBlack};
    width: 100%;
    position: absolute;
    left: 0;
    padding: 0 10%;
`;