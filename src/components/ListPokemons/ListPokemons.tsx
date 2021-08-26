import React from 'react';
import Loading from '../Loading/Loading';
import Pokemons from '../Pokemons/Pokemons';
import { propsPokemon } from '../utils';

export type propsListPokemons = {
    pokemonData: propsPokemon[], 
    loading: Boolean
}

const ListPokemons = ({pokemonData, loading}: propsListPokemons) => {
    return (
        <div>
            {
                loading
                    ?   <Loading />
                    :   <Pokemons {...pokemonData} />
            }
        </div>
    )
}

export default ListPokemons;
