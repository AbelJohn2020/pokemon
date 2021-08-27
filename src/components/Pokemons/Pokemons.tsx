import React from 'react';
import { Link } from 'react-router-dom';
import { propsPokemon } from '../utils';
import { Album, Container, Card, H1, Div, BoxImage, H3, P } from './PokemonsStyled';

const Pokemons = ( pokemonData: propsPokemon[]) => {
    const dataPokemons = Object.values(pokemonData);
    return (
        <Container>
            <H1>pokemon</H1>
            <P>Choose your pokemon and discover more</P>
            <Album>
                {
                    dataPokemons.map(({id, name, picture}) => (
                        <Div key={id}>
                            <Link to={`/pokemon/${id}`} className="cardPokemon">
                                <Card>
                                    <H3>{name}</H3>
                                    <BoxImage>
                                            <img src={picture} alt={name} />
                                    </BoxImage>
                                </Card>
                            </Link>
                        </Div>
                    ))
                }
            </Album>
        </Container>
    )
}

export default Pokemons;
