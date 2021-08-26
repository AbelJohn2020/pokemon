import React, { useEffect, useState } from 'react';
import { Pokemon } from '../interfaces';
import Loading from '../Loading/Loading';
import { getCharacters } from '../utils';

const ListPokemons = () => {
    const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getCharacters()
            .then(res => {
                setPokemonData(res)
                setLoading(false)
            })
            .catch(error => console.log(error));
    }, []);

    console.log(pokemonData);

    return (
        <div>
            {
                loading
                    ?   <Loading />
                    :   <div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>name</th>
                                        <th>photo</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        pokemonData.map(({id, name, picture}) => (
                                            <tr key={id}>
                                                <td>{name}</td>
                                                <td>
                                                    <img src={picture} alt={name} />
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
            }
        </div>
    )
}

export default ListPokemons;
