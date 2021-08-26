import React, { useEffect, useState } from 'react';
import Loading from '../Loading/Loading';
import Pokemons from '../Pokemons/Pokemons';
import { getCharacters, propsPokemon } from '../utils';

const ListPokemons = () => {
    const [pokemonData, setPokemonData] = useState<propsPokemon[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getCharacters()
            .then(res => {
                    if(res?.length === 0 || res === undefined) {
                        return res;
                    } else {
                        setPokemonData(res);
                        setLoading(false);
                    }
            })
            .catch(error => console.log(error));
    }, []);

    console.log(pokemonData);

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
