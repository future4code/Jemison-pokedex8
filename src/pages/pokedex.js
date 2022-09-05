// O usuário deve pode ver os Pokemons que foram adicionados em sua Pokedex.

import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ContextPokedex } from "../context/ContexPokedex";
import { HeaderPokedex } from "../components/header/HeaderPokedex";
import {
    ListaDePokemons,
    Card,
    CardImagem,
    CardContent,
    Botoes,
    Botao,
} from "../components/pokelist/StyledPokeList";
import { goToDetailPage } from "../router/coordinator";

/// Copiar logica e estrutura do pokecard

export default function Pokedex() {
    const navigate = useNavigate();
    const { pokedex, removerPokemon } = useContext(ContextPokedex);

    return (
        <div>
            <HeaderPokedex />
            <ListaDePokemons>
                {pokedex.map((pokemon) => (
                    <Card>
                        <CardImagem>
                            <p>Nº {pokemon.id}</p>

                            <img
                                src={
                                    pokemon[`sprites`][`other`][
                                        `official-artwork`
                                    ][`front_default`]
                                }
                            />
                        </CardImagem>

                        <CardContent>
                            <h2>{pokemon.name}</h2>

                            <Botoes>
                                <Botao onClick={() => removerPokemon(pokemon)}>
                                    Remover
                                </Botao>

                                <Botao onClick={() => goToDetailPage(navigate)}>
                                    Ver detalhes
                                </Botao>
                            </Botoes>
                        </CardContent>
                    </Card>
                ))}
            </ListaDePokemons>
        </div>
    );
}
