import axios from "axios";
import { pokeApi } from "../../app/config"
import { FetchPokemons, Pokemon, Pokemons } from "../interfaces";

export const getCharacters = async (): Promise<Pokemon[]> => {
    const response = await pokeApi.get<FetchPokemons>('/pokemon?limit=1200/');
    const pokemons = response.data.results;
    return infromationPokemon(pokemons);
}

export const movesPokemon = async (url: String) => {
    const request = await axios(`${url}`);
    const data = request.data;
    return data;
}

const infromationPokemon = ( pokemons: Pokemons[] ): Pokemon[] => {
    const newArrPokemon: Pokemon[] = pokemons.map( ({name, url}) => {
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
