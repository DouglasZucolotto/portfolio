import styled from "styled-components";
import { colors } from "../../constants";

export const Header = styled.div`
    height: 64px;
    background-color: ${colors.purple.main5};
    border-radius: 10px;
    margin-top: 10px;

    .btn {
        display: flex;
        justify-content: center;
        padding-top: 19px;
        margin-left: 1000px;
        gap: 30px;
    }
`