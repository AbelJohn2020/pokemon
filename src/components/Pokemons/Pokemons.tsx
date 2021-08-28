import React from 'react';
import { Link } from 'react-router-dom';
import { propsPokemon } from '../utils';
import { Album, Container, Card, H1, Div, BoxImage, H3, P, H4, BoxIdName } from './PokemonsStyled';

const Pokemons = ( pokemonData: propsPokemon[]) => {
    const dataPokemons = Object.values(pokemonData);

    const getId = (id: string) => {
        const newId = parseInt(id)
        if(newId <= 9) {
            return `#000${id}`
        } else {
            if(newId <= 99) {
                return `#00${id}`
            } else {
                if(newId <= 999) {
                    return `#0${id}`
                } else {
                    return `#${id}`
                }
            }
        }
    }

    return (
        <Container>
            <H1>pokédex</H1>
            <P>Choose your pokemon and discover more</P>
            <Album>
                {
                    dataPokemons.map(({id, name, picture}) => (
                        <Div key={id}>
                            <Link to={`/pokemon/${id}`} className="cardPokemon">
                                <Card>
                                    <div className="plastic">
                                        <BoxImage>
                                                <img src={picture} alt={name} />
                                        </BoxImage>
                                    </div>
                                    <BoxIdName>
                                        <H4>{getId(id)}</H4>
                                        <H3>{name}</H3>
                                    </BoxIdName>
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
