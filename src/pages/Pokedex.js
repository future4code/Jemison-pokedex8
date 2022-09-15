// O usuário deve pode ver os Pokemons que foram adicionados em sua Pokedex.

import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
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
                return "#5c9167";
                break;
            case "fire":
                return "#b1856b";
                break;
            case "water":
                return "#66a0b3";
                break;
            case "bug":
                return "#75a465";
                break;
            case "normal":
                return "#bfb38d";
                break;
            case "poison":
                return "#a56e9b";
                break;
            case "electric":
                return "#e0c04a";
                break;
            case "ground":
                return "#c9a16e";
                break;
            case "fairy":
                return "#e0a4c4";
                break;
            case "fighting":
                return "#a56e6e";
                break;
            case "psychic":
                return "#c4a0b3";
                break;
            case "rock":
                return "#b3a16e";
                break;
            case "ghost":
                return "#6e6eb3";
                break;
            case "ice":
                return "#a4c4c4";
                break;
            case "dragon":
                return "#6e6eb3";
                break;
            case "dark":
                return "#6e6e6e";
                break;
            case "steel":
                return "#a4b3b3";
                break;
            default:
                return "#f2f2f2";
        }
    };

    const getTypeColor = (typePokemon) => {
        switch (typePokemon) {
            case "grass":
                return "#5c9167";
                break;
            case "fire":
                return "#b1856b";
                break;
            case "water":
                return "#66a0b3";
                break;
            case "bug":
                return "#75a465";
                break;
            case "normal":
                return "#bfb38d";
                break;
            case "poison":
                return "#a56e9b";
                break;
            case "electric":
                return "#e0c04a";
                break;
            case "ground":
                return "#c9a16e";
                break;
            case "fairy":
                return "#e0a4c4";
                break;
            case "fighting":
                return "#a56e6e";
                break;
            case "psychic":
                return "#c4a0b3";
                break;
            case "rock":
                return "#b3a16e";
                break;
            case "ghost":
                return "#6e6eb3";
                break;
            case "ice":
                return "#a4c4c4";
                break;
            case "dragon":
                return "#6e6eb3";
                break;
            case "dark":
                return "#6e6e6e";
                break;
            case "steel":
                return "#a4b3b3";
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
