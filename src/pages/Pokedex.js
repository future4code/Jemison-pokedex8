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
    TiposPokemon,
} from "../components/pokelist/StyledPokeList";
import { goToDetailPage } from "../router/Coordinator";

/// Copiar logica e estrutura do pokecard

export default function Pokedex() {
    const navigate = useNavigate();
    const { pokedex, removerPokemon } = useContext(ContextPokedex);

    // Lógica para alterar o background do pokemon pelo tipo
    const getTypeBackgroundColor = (typePokemon) => {
        switch (typePokemon) {
            case "grass":
                return "#b4d8c3";
                break;
            case "fire":
                return "#efe2cb";
                break;
            case "water":
                return "#abd0d9";
                break;
            case "bug":
                return "#add7a2";
                break;
            case "normal":
                return "#f4edb2";
                break;
            default:
                return "#f2f2f2";
        }
    };

    const getTypeColor = (typePokemon) => {
        switch (typePokemon) {
            case "grass":
                return "#9bcc50";
                break;
            case "fire":
                return "#fd7d24";
                break;
            case "water":
                return "#4592c4";
                break;
            case "bug":
                return "#729f3f";
                break;
            case "normal":
                return "#a4acaf";
                break;
            default:
                return "#f2f2f2";
        }
    };

    return (
        <div>
            <HeaderPokedex />
            <ListaDePokemons>
                {pokedex.map((pokemon) => (
                    <Card>
                        <CardImagem
                            style={{
                                background: getTypeBackgroundColor(
                                    pokemon.types[0].type.name
                                ),
                            }}>
                            <div>
                                <p>{pokemon.id}</p>
                                <TiposPokemon>
                                    <span
                                        style={{
                                            background: getTypeColor(
                                                pokemon.types[0].type.name
                                            ),
                                        }}>
                                        {pokemon.types[0].type.name}
                                    </span>
                                </TiposPokemon>
                            </div>

                            <img
                                src={
                                    pokemon.sprites.other[`official-artwork`]
                                        .front_default
                                }
                            />
                        </CardImagem>

                        <CardContent>
                            <h2>{pokemon.name}</h2>

                            <Botoes>
                                <Botao onClick={() => removerPokemon(pokemon)}>
                                    Remover
                                </Botao>

                                <Botao
                                    onClick={() =>
                                        goToDetailPage(navigate, pokemon.id)
                                    }>
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
