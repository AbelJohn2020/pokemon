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

export const informationPokemon = async (url: string) => {
    const request = await axios(`${url}`);
    const data = request.data;
    return data;
}

export const getId = (id: string) => {
    const newId = parseInt(id)
    if(newId <= 9) {
        return `#000${id}`
    } else {
        if(newId <= 99) {
            return `#00${id}`
        } else {
            if(newId <= 999) {
                return `#0${id}`
            } else {
                return `#${id}`
            }
        }
    }
}

const cardPokemon = ( pokemons: Array<propsPokemon> ) => {
    const newArrPokemon = pokemons.map( ({name, url}: propsPokemon) => {
        const getUrl = url.split('/');
        const getId = getUrl[6];

        const getPicture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${getId}.png`;

        return {
            id: getId,
            name: name,
            url,
            picture: getPicture,
        }
    });

    return newArrPokemon;
}