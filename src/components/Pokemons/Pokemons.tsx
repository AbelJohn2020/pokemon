import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getId, propsPokemon } from '../utils';
import { Album, Container, Card, H1, Div, BoxImage, H3, P, H4, BoxIdName, Input, Header, ContainerAlbum, H3Validation, PChoose, PNoHyphen } from './PokemonsStyled';

const Pokemons = ( pokemonData: propsPokemon[]) => {
    const dataPokemons = Object.values(pokemonData);
    const [inputValue, setInputValue] = useState<string>('')

    const findPokemons = () => {
        if(inputValue.length === 0) {
            return dataPokemons;
        } else {
            const filterPokemons = dataPokemons.filter( pokemon => pokemon.name.includes(inputValue) || pokemon.id.includes(inputValue))
            return filterPokemons;
        }
    }

    const writeYourPokemon = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    const pokemons = findPokemons();
    const notHyphen = inputValue.includes('-');
    console.log(typeof(notHyphen))

    return (
        <Container>
            <Header>
                <H1>pokédex</H1>
                <P>Name or Number</P>
                <Input 
                    type='text'
                    placeholder="Find your pokémon"
                    onChange={e => writeYourPokemon(e)}
                />
                {
                    notHyphen
                        &&  <PNoHyphen>The number can not be negative and the words can not be separate by hyphen</PNoHyphen>
                }
                <PChoose notHyphen={notHyphen}>Choose your pokemon and discover more</PChoose>
            </Header>
            <ContainerAlbum>
                {
                    pokemons.length > 0
                        ?   <Album>
                                {
                                    pokemons.map(({id, name, picture}) => (
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
                        :   <H3Validation>Pokémon not found, please introduce a valid Name or Number</H3Validation>
                }
            </ContainerAlbum>
        </Container>
    )
}

export default Pokemons;
