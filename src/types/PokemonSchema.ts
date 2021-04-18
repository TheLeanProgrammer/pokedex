export interface UnpatchedPokemonSchema {
    id?: string;
    species_id?: string;
    height?: string;
    weight?: string;
    base_experience?: string;
    order?: string;
    is_default?: string;
    name?: string;
    sprites?: string;
}

export interface PokemonSpritesSchema {
    normal?: string;
    animated?: string;
}

export interface PokemonSchema {
    id?: string;
    species_id?: string;
    height?: string;
    weight?: string;
    base_experience?: string;
    order?: string;
    is_default?: string;
    name?: string;
    sprites: PokemonSpritesSchema;
}