import React from 'react';
import { Link } from 'react-router-dom';
import { propsPokemon } from '../utils';

const Pokemons = ( pokemonData: propsPokemon[]) => {
    const dataPokemons = Object.values(pokemonData);
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
                            dataPokemons.map(({id, name, picture}) => (
                                <tr key={id}>
                                    <td>{name}</td>
                                    <td>
                                        <Link to={`/pokemon/${id}`}>
                                            <img src={picture} alt={name} />
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
            </table>
        </div>
    )
}

export default Pokemons;
