import styled from "styled-components";
import { colors } from "../../constants";

export const PrimaryBtn = styled.button`
    background-color: transparent;
`

export const TransparentBtn = styled.button`
    background-color: transparent;
    border: none;
    color: #898989;
    font-family: "Raleway", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    transition: color 0.2s ease-in-out;

    &:hover{
        color: ${colors.purple.main50};
    }
`