import React from "react";
import { pokemonData } from "../../data/pokeData";
import {
    PokemonSchema,
    PokemonSpritesSchema,
    UnpatchedPokemonSchema,
} from "../../types/PokemonSchema";

import Pokedex from "../Pokedex/Pokedex";
import "./App.css";

export interface AppState {
    searchField: string;
    allPokemons: PokemonSchema[];
    searchedPokemons: PokemonSchema[];
    selectedPokemon: PokemonSchema | undefined;
}

class App extends React.Component<any, AppState> {
    state = {
        searchField: "",
        allPokemons: [],
        searchedPokemons: [],
        selectedPokemon: undefined,
    };

    patchPokemonData = (pokemons: UnpatchedPokemonSchema[]) => {
        const patchedPokemons = pokemons.map((pokemon) => {
            let parsedSprites: PokemonSpritesSchema = {
                normal: undefined,
                animated: undefined,
            };

            try {
                parsedSprites = pokemon.sprites && JSON.parse(pokemon.sprites);
            } catch (e) {
                console.log("Exception while parsing sprites: ", e);
            }

            const patchedPokemon: PokemonSchema = {
                ...pokemon,
                sprites: parsedSprites,
            };

            return patchedPokemon;
        });

        return patchedPokemons;
    };

    componentDidMount() {
        // patch the stringified pokemons
        const patchedPokemons: PokemonSchema[] = this.patchPokemonData(
            pokemonData
        );

        // Update the state with patched pokemons
        this.setState({
            allPokemons: patchedPokemons,
            searchedPokemons: patchedPokemons,
        });
    }

    handleInputChange = (inputValue: string) => {
        const searchField = inputValue;

        const { allPokemons } = this.state;

        const searchedPokemons = allPokemons.filter(
            (pokemon: PokemonSchema) => {
                return (
                    pokemon.name &&
                    pokemon.name
                        .toLowerCase()
                        .includes(searchField.toLowerCase())
                );
            }
        );

        this.setState({ searchField, searchedPokemons });
    };

    handleClick = (pokemonName: string) => {
        const { allPokemons } = this.state;

        // Find the selected pokemon from allPokemons
        const selectedPokemon = allPokemons.find(
            (pokemon: PokemonSchema) => pokemon.name === pokemonName
        );

        // Update the state
        this.setState({ selectedPokemon });
    };

    render() {
        return (
            <div className="App">
                <h1>Pokedex</h1>
                <Pokedex
                    pokemons={this.state.searchedPokemons}
                    onInputChange={this.handleInputChange}
                    onPokemonClick={this.handleClick}
                    selectedPokemon={this.state.selectedPokemon}
                />
            </div>
        );
    }
}

export default App;
