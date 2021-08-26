import React from 'react';
import { getCharacters } from '../utils';

const ListPokemons = () => {
    getCharacters()
        .then(res => console.log(res))
        .catch(error => console.log(error));
    return (
        <div>
            
        </div>
    )
}

export default ListPokemons;
