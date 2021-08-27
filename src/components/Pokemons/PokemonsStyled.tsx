import styled from "@emotion/styled";
import { colors } from "../UI/colors";
import '../UI/styles.css';

export const Container = styled.div`
    width: 100%;
    padding: 8px 48px 48px 48px;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto';
    background: ${colors.lightGray};

    @media(max-width: 788px) {
        padding: 8px 16px 16px 16px;
    }
`;

export const Album = styled.div`
    padding: 8px;
    margin: 24px 0 0 0;
    width: 100%;
    display: grid;
    grid-template-columns: 24.5% 24.5% 24.5% 24.5%;
    gap: 8px;
    box-sizing: border-box;
    border-radius: 8px;
    box-sizing: border-box;
`;

export const Div = styled.div`
    border: ${colors.cColor} solid 3px;
    border-radius: 6px;
    padding: 24px 0;
    box-sizing: border-box;
    
    &:hover {
        padding: 16px 0 6px 0;
        border: ${colors.lightGray} solid 2px;
        box-shadow: 2px 2px 8px 0 ${colors.shadow};

        img {
            width: 36%;
            box-sizing: border-box;
        }
    }

    .cardPokemon {
        text-decoration: none;
        color: ${colors.lightBlack};

        &:visited {
            color: ${colors.lightBlack};
        }

        &:active {
            color: ${colors.blue}
        }
    }

    @media(max-width: 1100px) {
        &:hover {
            img {
                width: 52%;
                box-sizing: border-box;
            }
        }
    }

    @media(max-width: 788px) {
        &:hover {
            img {
                width: 64%;
                box-sizing: border-box;
            }
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
`;

export const H1 = styled.h1`
    width: 100%;
    text-align: center;
    margin: 16px 0 24px 0;
    paddgin: 0;
    text-transform: capitalize;
    box-sizing: border-box;
`;

export const H3 = styled.h3`
    margin: 8px 0;
    paddgin: 0;
    text-transform: capitalize;
    box-sizing: border-box;
`;

export const P = styled.p`
    box-sizing: border-box;
    margin: 0;
    padding: 8px;
    width: 100%;
`;