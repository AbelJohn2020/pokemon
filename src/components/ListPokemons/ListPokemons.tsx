import React, { useEffect, useState } from 'react';
import { Pokemon } from '../interfaces';
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
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>photo</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pokemonData.map(({id, name, url, picture}) => (
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
    )
}

export default ListPokemons;
