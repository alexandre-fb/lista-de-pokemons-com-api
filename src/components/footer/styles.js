import styled from "styled-components";

export const Container = styled.footer`
    text-align: center;
    padding: 20px;
    overflow-x: hidden;

    p {
        border-top: 1px solid #cdcdcd;
        padding: 15px;
        font-size: 0.8rem;
        font-style: italic;
        color: ${({themeData}) => themeData.colors.blackToWhite};
    }

    a{
        font-style: normal;
        color: ${({themeData}) => themeData.colors.blueToYellow};
        text-decoration: none;
    }
` 