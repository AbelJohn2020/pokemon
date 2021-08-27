import styled from '@emotion/styled';
import { colors } from '../UI/colors';
import '../UI/styles.css';

export const PokemonContainer = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
`;

export const PokemonCard = styled.div`
    width: 92%;
    box-sizing: border-box;
`;

export const InformationCard = styled.div`
    width: 100%;
    margin: 24px 0;
    display: flex;
    box-sizing: border-box;
`;

export const LeftDiv = styled.div`
    width: 16%;
    box-sizing: border-box;
`;

export const RightDiv = styled.div`
    width: 84%;
    padding: 0 16px;
    box-sizing: border-box;
`;

export const DivImg = styled.div`
    width: 100%;
    box-sizing: border-box;
    border: ${colors.lightGray} solid 2px;
    border-radius: 8px;

    img {
        width: 100%;
    }
`;

export const H1Pokemon = styled.h1`
    text-transform: capitalize;
`;

export const Ul = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
`;

export const Li = styled.li`
    width: 100%;
    margin: 0;
    padding: 4px 8px;
    box-sizing: border-box;
`;
