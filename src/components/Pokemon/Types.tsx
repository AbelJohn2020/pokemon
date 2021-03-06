export type InformationPokemon = {
    abilities:                Ability[];
    base_experience:          number;
    forms:                    Species[];
    game_indices:             GameIndex[];
    height:                   number;
    held_items:               any[];
    id:                       number;
    is_default:               boolean;
    location_area_encounters: string;
    moves:                    Move[];
    name:                     string;
    order:                    number;
    past_types:               any[];
    species:                  Species;
    sprites:                  Sprites;
    stats:                    Stat[];
    types:                    Type[];
    weight:                   number;
}

type Ability = {
    ability:   Species;
    is_hidden: boolean;
    slot:      number;
}

type Species = {
    name: string;
    url:  string;
}

type GameIndex = {
    game_index: number;
    version:    Species;
}

type Move = {
    move:                  Species;
    version_group_details: VersionGroupDetail[];
}

type VersionGroupDetail = {
    level_learned_at:  number;
    move_learn_method: Species;
    version_group:     Species;
}

type GenerationV = {
    "black-white": Sprites;
}

type GenerationIv = {
    "diamond-pearl":        Sprites;
    "heartgold-soulsilver": Sprites;
    platinum:               Sprites;
}

type Versions = {
    "generation-i":    GenerationI;
    "generation-ii":   GenerationIi;
    "generation-iii":  GenerationIii;
    "generation-iv":   GenerationIv;
    "generation-v":    GenerationV;
    "generation-vi":   { [key: string]: GenerationVi };
    "generation-vii":  GenerationVii;
    "generation-viii": GenerationViii;
}

type Sprites = {
    back_default:       string;
    back_female:        null;
    back_shiny:         string;
    back_shiny_female:  null;
    front_default:      string;
    front_female:       null;
    front_shiny:        string;
    front_shiny_female: null;
    other?:             Other;
    versions?:          Versions;
    animated?:          Sprites;
}

type GenerationI = {
    "red-blue": RedBlue;
    yellow:     RedBlue;
}

type RedBlue = {
    back_default:  string;
    back_gray:     string;
    front_default: string;
    front_gray:    string;
}

type GenerationIi = {
    crystal: Crystal;
    gold:    Crystal;
    silver:  Crystal;
}

type Crystal = {
    back_default:  string;
    back_shiny:    string;
    front_default: string;
    front_shiny:   string;
}

type GenerationIii = {
    emerald:             Emerald;
    "firered-leafgreen": Crystal;
    "ruby-sapphire":     Crystal;
}

type Emerald = {
    front_default: string;
    front_shiny:   string;
}

type GenerationVi = {
    front_default:      string;
    front_female:       null;
    front_shiny:        string;
    front_shiny_female: null;
}

type GenerationVii = {
    icons:                  DreamWorld;
    "ultra-sun-ultra-moon": GenerationVi;
}

type DreamWorld = {
    front_default: string;
    front_female:  null;
}

type GenerationViii = {
    icons: DreamWorld;
}

type Other = {
    dream_world:        DreamWorld;
    "official-artwork": OfficialArtwork;
}

type OfficialArtwork = {
    front_default: string;
}

type Stat = {
    base_stat: number;
    effort:    number;
    stat:      Species;
}

type Type = {
    slot: number;
    type: Species;
}