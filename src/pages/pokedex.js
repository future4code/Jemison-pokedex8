// O usuário deve pode ver os Pokemons que foram adicionados em sua Pokedex.

import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ContextPokedex } from "../context/ContexPokedex";

/// Copiar logica e estrutura do pokecard

export default function Pokedex() {
    const navigate = useNavigate();
    const { pokedex } = useContext(ContextPokedex);

    return (
        <div>
            {pokedex.map((pokemon) => (
                <>
                    <p>{pokemon.name}</p>
                    <img
                        src={
                            pokemon[`sprites`][`other`][`official-artwork`][
                                `front_default`
                            ]
                        }
                    />
                </>
            ))}
        </div>
    );
}
