import React from "react";
import "./Pokecard.css";

interface PokecardProps {
    spriteUrl?: string;
    name: string;
    onPokemonClick: (pokemonName: string) => void;
}

const Pokecard = ({ name, spriteUrl, onPokemonClick }: PokecardProps) => {
    return (
        <div onClick={() => onPokemonClick(name)} className="pokecard">
            <img className="pokemon-sprite" alt="pokemon" src={spriteUrl} />
            <p>{name}</p>
        </div>
    );
};

export default Pokecard;
