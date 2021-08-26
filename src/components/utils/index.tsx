import axios from "axios";
import { pokeApi } from "../../app/config"

export type propsPokemon = {
    id: string,
    name: string,
    url: string,
    picture: string,
}

export const getCharacters = async () => {
    try {
        const response = await pokeApi.get('/pokemon?limit=1200/');
        const pokemons = response.data.results;
        return infromationPokemon(pokemons);
    } catch(error) {
        console.log(error);
    }
}

export const movesPokemon = async (url: String) => {
    const request = await axios(`${url}`);
    const data = request.data;
    return data;
}

const infromationPokemon = ( pokemons: Array<propsPokemon> ) => {
    const newArrPokemon = pokemons.map( ({name, url}: propsPokemon) => {
        const getUrl = url.split('/');
        const getId = getUrl[6];

        const getPicture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getId}.png`;

        return {
            id: getId,
            name: name,
            url,
            picture: getPicture,
        }
    });

    return newArrPokemon;
}
