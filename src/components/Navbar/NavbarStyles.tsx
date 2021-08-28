import styled from "@emotion/styled";
import { colors } from "../UI/colors";

export const Nav = styled.div`
    width: 100%;
    padding: 8px 12px;
    margin: 0;
    box-sizing: border-box;
    background: ${colors.blue};

    .backMainPage {
        text-decoration: none;
        outline: none;
    }
`;

export const Img = styled.img`
    width: 10%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    @media(max-width: 788px) {
        width: 16%;
    }
`;
