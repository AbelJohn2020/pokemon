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
        const response = await pokeApi.get('/pokemon/');
        const pokemons = response.data.results;
        return cardPokemon(pokemons);
    } catch(error) {
        alert(error);
    }
}

export const informationPokemon = async (url: String) => {
    const request = await axios(`${url}`);
    const data = request.data;
    return data;
}

const cardPokemon = ( pokemons: Array<propsPokemon> ) => {
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
