import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors } from "../UI/colors";
import '../UI/styles.css';

type propP = {
    notHyphen: boolean
}

export const Container = styled.div`
    width: 100%;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Flexo Medium";
`;

export const Header = styled.div`
    width: 100%;
    box-sizing: border-box;
    background: ${colors.secondBlack};
    padding: 16px 0 48px 48px;
`;

export const Input = styled.input`
    box-sizing: border-box;
    width: 24%;
    margin: 0;
    padding: 8px 12px;
    border: ${colors.borderInput} solid 2px;
    font-size: 20px;
    font-family: "Flexo Medium";
    outline: none;
    border-radius: 4px;

    &::placeholder {
        font-size: 16px;
    }
`;

export const ContainerAlbum = styled.div`
    width: 100%;
    min-height: 398px;
    box-sizing: border-box;
    padding: 8px 48px 120px 48px;
    background: ${colors.lightGray};

    @media(max-width: 788px) {
        padding: 8px 16px 16px 16px;
    }
`;

export const Album = styled.div`
    padding: 16px 0 48px 0;
    margin: 24px 0 0 0;
    width: 100%;
    display: grid;
    grid-template-columns: 24% 24% 24% 24%;
    gap: 8px;
    justify-content: center;
    box-sizing: border-box;
    border-radius: 8px;
    box-sizing: border-box;
    background: ${colors.darkDarwhite};
`;

export const Div = styled.div`
    border: ${colors.darkDarwhite} solid 3px;
    border-radius: 8px;
    padding: 0 0 24px 0;
    box-sizing: border-box;
    
    &:hover {
        padding: 0 0 6px 0;
        border: ${colors.lightGray} solid 2px;
        box-shadow: 2px 2px 8px 0 ${colors.shadow};

        .plastic {
            padding: 8px 0 4px 0;
            background: ${colors.lightGray};
            box-sizing: border-box;
        }

        img {
            width: 100%;
            box-sizing: border-box;
        }
    }

    .plastic {
        padding: 24px 0 4px 0;
        background: ${colors.lightGray};
        box-sizing: border-box;
        border-radius: 8px;
    }

    .cardPokemon {
        text-decoration: none;
        outline: none;
        color: ${colors.lightBlack};

        &:visited {
            color: ${colors.lightBlack};
        }

        &:active {
            color: ${colors.blue}
        }
    }
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
`;

export const BoxImage = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 92%;
        box-sizing: border-box;
    }
`;

export const BoxIdName = styled.div`
    width: 100%;
    margin: 0;
    padding: 0 24px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
`;

export const H1 = styled.h1`
    width: 100%;
    margin: 16px 0;
    paddgin: 0;
    text-transform: capitalize;
    box-sizing: border-box;
    color: ${colors.lightWhite};
`;

export const H3 = styled.h3`
    margin: 8px 0;
    paddgin: 0;
    text-transform: capitalize;
    box-sizing: border-box;
`;

export const H4 = styled.h4`
    width: 100%;
    text-align: left;
    margin: 8px 0;
    paddgin: 0;
    box-sizing: border-box;
    color: ${colors.gray};
`;

export const P = styled.p`
    box-sizing: border-box;
    margin: 0;
    padding: 8px 0;
    width: 100%;
    color: ${colors.lightWhite};
`;

export const PChoose = styled.p(({notHyphen}: propP) => css`
    box-sizing: border-box;
    margin: 0;
    padding: ${notHyphen ? '8px 0' : '43px 0 8px 0'};
    width: 100%;
    color: ${colors.lightWhite};
`);

export const PNoHyphen = styled.p`
    box-sizing: border-box;
    margin: 0;
    padding: 8px 0;
    width: 100%;
    color: ${colors.lightWhite};
`;

export const H3Validation = styled.h3`
    box-sizing: border-box;
    margin: 0;
    padding: 24px 0 8px 0;
    width: 100%;
    color: ${colors.secondBlack};
`;