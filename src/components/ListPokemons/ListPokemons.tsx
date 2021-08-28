import React from 'react';
import Loading from '../Loading/Loading';
import Pokemons from '../Pokemons/Pokemons';
import { propsPokemon } from '../utils';
import { MainContainer } from './ListPokemonsStyles';

export type propsListPokemons = {
    pokemonData: propsPokemon[], 
    loading: Boolean
}

const ListPokemons = ({pokemonData, loading}: propsListPokemons) => {
    return (
        <MainContainer>
            {
                loading
                    ?   <Loading />
                    :   <Pokemons {...pokemonData} />
            }
        </MainContainer>
    )
}

export default ListPokemons;
