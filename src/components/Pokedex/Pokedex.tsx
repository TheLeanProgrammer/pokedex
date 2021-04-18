import * as React from "react";
import { PokemonSchema } from "../../types/PokemonSchema";
import Pokelist from "../Pokelist/Pokelist";
import PokeSearchResult from "../PokeSearchResult/PokeSearchResult";
import Searchbox from "../Searchbox/Searchbox";
import "./Pokedex.css";

interface PokedexProps {
    pokemons: PokemonSchema[];
    selectedPokemon: PokemonSchema | undefined;
    onInputChange: (inputValue: string) => void;
    onPokemonClick: (pokemonName: string) => void;
}

const Pokedex = ({
    pokemons,
    selectedPokemon,
    onInputChange,
    onPokemonClick,
}: PokedexProps) => {
    return (
        <div className="pokedex-container">
            <div className="pokelist-container">
                <Searchbox onInputChange={onInputChange} />
                <Pokelist onPokemonClick={onPokemonClick} pokemons={pokemons} />
            </div>
            <div className="pokesearchresult-container">
                <PokeSearchResult selectedPokemon={selectedPokemon} />
            </div>
        </div>
    );
};

export default Pokedex;
