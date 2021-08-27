import styled from "@emotion/styled";
import '../UI/styles.css';

export const Container = styled.div`
    width: 100%;
    padding: 48px;
    margin: 0;
    box-sizing: border-box;
`;

export const Album = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    box-sizing: border-box;
`;

export const H1 = styled.h1`
    margin: 16px 0 24px 0;
    paddgin: 0;
    text-transform: capitalize;
    font-family: 'Roboto';
    box-sizing: border-box;
`;