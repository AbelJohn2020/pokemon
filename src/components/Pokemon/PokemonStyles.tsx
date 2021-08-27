import styled from '@emotion/styled';
import { colors } from '../UI/colors';
import '../UI/styles.css';

export const PokemonContainer = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    font-family: 'Roboto';
    color: ${colors.secondBlack};
`;

export const PokemonCard = styled.div`
    width: 92%;
    box-sizing: border-box;
`;

export const Information = styled.div`
    width: 100%;
    margin: 24px 0;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
`;

export const InformationCard = styled.div`
    width: 100%;
    margin: 24px 0;
    display: flex;
    box-sizing: border-box;
`;

export const LeftDiv = styled.div`
    width: 24%;
    box-sizing: border-box;
`;

export const RightDiv = styled.div`
    width: 84%;
    padding: 0 16px;
    display: flex;
    box-sizing: border-box;
`;

export const DivImg = styled.div`
    width: 100%;
    box-sizing: border-box;
    border: ${colors.cColor} solid 2px;
    box-shadow: 2px 2px 8px 0 ${colors.shadow};
    border-radius: 8px;

    img {
        width: 100%;
    }
`;

export const H1Pokemon = styled.h1`
    text-transform: capitalize;
`;

export const H4Pokemon = styled.h4`
    text-transform: capitalize;
`;

export const Ul = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding: 0 48px;
    margin: 0;
`;

export const Li = styled.li`
    width: 100%;
    margin: 0;
    padding: 8px;
    box-sizing: border-box;
`;

export const PPokemon = styled.p`
    margin: 4px 0;
    padding: 0 0 0 4px;
    text-transform: capitalize;
`;
