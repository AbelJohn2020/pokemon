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
    align-items: center;
    box-sizing: border-box;
`;

export const PlasticCard = styled.div`
    width: 80%;
    box-sizing: border-box;
`;

export const InformationCard = styled.div`
    width: 100%;
    margin: 24px 0;
    display: flex;
    box-sizing: border-box;
`;

export const BoxTitle = styled.div`
    width: 100%;
    display: flex; 
    justify-content: center;
    box-sizing: border-box;
`;

export const H1Pokemon = styled.h1`
    text-transform: capitalize;
    box-sizing: border-box;
`;

export const IdPokemon = styled.h1`
    padding: 0;
    margin: 0 0 0 16px;
    color: ${colors.gray};
    box-sizing: border-box;
`;

export const LeftDiv = styled.div`
    width: 40%;
    box-sizing: border-box;
`;

export const RightDiv = styled.div`
    width: 60%;
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
`;

export const FirstBlockInRightDiv = styled.div`
    width: 100%;
    padding: 24px 32px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    background: ${colors.secondBlue};
    border-radius: 8px;
`;

export const SecondBlockInRightDiv = styled.div`
    width: 100%;
    padding: 24px 8px 0 8px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    border-radius: 8px;
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

export const H4Pokemon = styled.h4`
    text-transform: capitalize;
    font-family: "Flexo Medium";
    margin: 0 0 12px 0;
    box-sizing: border-box;
    font-size: 20px;
`;

export const H4PokemonFB = styled.h4`
    text-transform: capitalize;
    font-family: "Flexo Medium";
    margin: 0 0 12px 0;
    color: ${colors.lightWhite};
    font-size: 16px;
    box-sizing: border-box;
`;

export const Ul = styled.ul`
    width: 100%;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
`;

export const UlFB = styled.ul`
    width: 50%;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
`;

export const Li = styled.li`
    width: 100%;
    margin: 0;
    padding: 8px;
    box-sizing: border-box;
`;

export const BoxTypes = styled.div`
    width: 100%;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 24% 24% 24% 24%;
`;

export const BoxMoves = styled.div`
    width: 100%;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    display: grid;
    justify-content: center;
    grid-template-columns: 33% 33% 33%;
`;

export const PPokemonFB = styled.p`
    margin: 8px 0;
    padding: 0 0 0 4px;
    text-transform: capitalize;
    font-family: "Flexo Medium";
    font-size: 20px;
    font-weight: bold;
    box-sizing: border-box;
`;

export const DivPPokemonSB = styled.div`
    box-sizing: border-box;
    padding: 8px 16px;
    border-radius: 6px;
    background: ${colors.darckNaure};
    margin: 0 8px 0 0;
    box-sizing: border-box;
`;

export const DivPPokemonTB = styled.div`
    box-sizing: border-box;
    padding: 8px 16px;
    border-radius: 6px;
    background: ${colors.orange};
    margin: 0 8px 8px 0;
    box-sizing: border-box;
`;

export const PPokemonSB = styled.p`
    width: 100%;
    margin: 2px;
    padding: 0;
    text-align: center;
    text-transform: capitalize;
    font-family: "Flexo Medium";
    font-size: 20px;
    box-sizing: border-box;
`;
