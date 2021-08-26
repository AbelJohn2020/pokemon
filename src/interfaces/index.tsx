// Generated by https://quicktype.io

export interface FetchPokemons {
    count:    number;
    next:     null;
    previous: null;
    results:  Pokemons[];
}

export interface Pokemons {
    name: string;
    url:  string;
}

export interface Pokemon {
    id: string;
    name: string;
    url: string;
    picture: string;
}
