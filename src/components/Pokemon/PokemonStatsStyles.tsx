import styled from "@emotion/styled";
import { colors } from "../UI/colors";

export const PlasticContainerStat = styled.div`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    margin: 12px 0 0 0;
    padding: 12px 16px 24px 16px;
    background: ${colors.midGray};
`;

export const StatTitle = styled.h3`
    text-transform: capitalize;
    font-family: "Flexo Medium";
    margin: 0 0 12px 0;
    box-sizing: border-box;
    font-size: 20px;
    color: ${colors.lightWhite};
`;

export const ContainerStat = styled.div`
    box-sizing: border-box;
    width: 100%;
    display: grid;
    justify-content: center;
    grid-template-columns: 16% 16% 16% 16% 16% 16%;
    column-gap: 4px;
    box-sizing: border-box;
`;

// export const 

export const GraphicStat = styled.div`
    box-sizing: border-box;
    width: 100%;
    display: grid;
    grid-template-rows: 16px 16px 16px 16px 16px 16px 16px 16px 16px 16px 16px 16px 16px 16px 16px;
    row-gap: 4px;
    grid-row: 15/1;
    box-sizing: border-box;
    transform: rotate(180deg);

    .stat {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        border-radius: 4px;
    }

    .global {
        background: ${colors.lightWhite};
    }

    .propertyPokemon {
        background: ${colors.secondBlue};
    }
`;

export const PStat = styled.p`
    width: 100%;
    margin: 0;
    padding: 4px 0;
    box-sizing: border-box;
    font-size: 12px;
    text-align: center;
    font-weight: bold;
    color: ${colors.lightWhite};
    text-transform: capitalize;
`;