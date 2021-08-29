import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getId, propsPokemon } from '../utils';
import { Album, Container, Card, H1, Div, BoxImage, H3, P, H4, BoxIdName, Input, Header, ContainerAlbum, H3Validation, PChoose, PNoHyphen, DivButtons, Button } from './PokemonsStyled';
import { GrPrevious, GrNext } from "react-icons/gr";

const Pokemons = ( pokemonData: propsPokemon[]) => {
    const dataPokemons = Object.values(pokemonData);
    const [inputValue, setInputValue] = useState<string>('');
    const [pagination, setPagination] = useState<number>(0);

    const findPokemons = () => {
        if(inputValue.length === 0) {
            return dataPokemons.slice(pagination, pagination+8);
        } else {
            const filterPokemons = dataPokemons.filter( pokemon => pokemon.name.includes(inputValue) || pokemon.id.includes(inputValue))
            return filterPokemons.slice(pagination, pagination+8);
        }
    }

    const handleNext = () => {
        if(pagination < dataPokemons.length-8) {
            setPagination(pagination +8)
        } else {
            setPagination(0)
        }
    }

    const hanldePrevious = () => {
        if(pagination > 8) {
            setPagination(pagination -8)
        } else {
            setPagination(0)
        }
    }

    const writeYourPokemon = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    const pokemons = findPokemons();
    const validationForSpecialCharacters = () => {
        return inputValue.replace(/[[/\]{}()*+?.,\\^$|#\s]/g, '');
    }

    const validation = validationForSpecialCharacters()
    const notHyphen = validation.includes(inputValue);

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
                    (notHyphen === false)
                        &&  <PNoHyphen>Do not use special characters</PNoHyphen>
                }
                <PChoose notHyphen={notHyphen}>Choose your pokemon and discover more</PChoose>
            </Header>
            <ContainerAlbum>
                <DivButtons>
                    {
                        pagination >= 8
                            &&  <Button type="button" onClick={hanldePrevious}>
                                    <GrPrevious />
                                </Button>
                    }
                    {
                        (notHyphen === true)
                            &&  <Button type="button" onClick={handleNext}>
                                    <GrNext />
                                </Button>
                    }
                </DivButtons>
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
