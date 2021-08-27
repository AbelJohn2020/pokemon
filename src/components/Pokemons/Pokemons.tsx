import React from 'react';
import { Link } from 'react-router-dom';
import { propsPokemon } from '../utils';
import { Album, Container, H1 } from './PokemonsStyled';

const Pokemons = ( pokemonData: propsPokemon[]) => {
    const dataPokemons = Object.values(pokemonData);
    return (
        <Container>
            <H1>pokemon</H1>
            <p>Choose your pokemon and see more</p>
            <Album>
                {
                    dataPokemons.map(({id, name, picture}) => (
                        <div key={id}>
                            <h3>{name}</h3>
                            <div>
                                <Link to={`/pokemon/${id}`}>
                                    <img src={picture} alt={name} />
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </Album>
        </Container>
    )
}

export default Pokemons;
