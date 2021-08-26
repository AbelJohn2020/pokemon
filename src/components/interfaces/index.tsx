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

export interface InformationPokemon {
    abilities:                Ability[];
    base_experience:          number;
    forms:                    Species[];
    height:                   number;
    id:                       number;
    is_default:               boolean;
    location_area_encounters: string;
    moves:                    Move[];
    name:                     string;
    order:                    number;
    species:                  Species;
    types:                    Type[];
    weight:                   number;
}

export interface Ability {
    ability:   Species;
    is_hidden: boolean;
    slot:      number;
}

export interface Species {
    name: string;
    url:  string;
}

export interface Move {
    move: Species;
}

export interface Type {
    slot: number;
    type: Species;
}
