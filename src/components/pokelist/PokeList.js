import React, { useContext } from "react";
import {
    ListaDePokemons,
    Card,
    CardImagem,
    CardContent,
    Botoes,
    Botao,
} from "./StyledPokeList";
import { useNavigate } from "react-router-dom";
import { goToDetailPage } from "../../router/Coordinator";
import { ContextPokedex } from "../../context/ContexPokedex";
import { useParams } from "react-router-dom";
export default function PokeCard() {
    const navigate = useNavigate();
    const { infoPokemons, capturarPokemon } = useContext(ContextPokedex);

    const { id } = useParams();

    const alerta = () => {
        alert("Pokémon Capturado!");
    };

    return (
        <ListaDePokemons>
            {infoPokemons.map((pokemon) => (
                <Card>
                    <CardImagem>
                        <p>Nº {pokemon.id}</p>

                        <img
                            src={pokemon.sprites.other.home.front_default}
                            // A versão antiga era: src={pokemon[`sprites`][`other`][`official-artwork`][`front_default`]}
                            alt={pokemon.name}
                        />
                    </CardImagem>

                    <CardContent>
                        <h2>{`${pokemon.name?.[0].toUpperCase()}${pokemon.name?.substring(1) ?? <p>Carregando</p>}`}</h2>

                        <Botoes>
                            <Botao
                                onClick={() => {
                                    alerta();
                                    capturarPokemon(pokemon, id);
                                }}>
                                Capturar
                            </Botao>
                            <Botao onClick={() => goToDetailPage(navigate, id)}>
                                Ver detalhes
                            </Botao>
                        </Botoes>
                    </CardContent>
                </Card>
            ))}
        </ListaDePokemons>
    );
}

{
    /* () => capturarPokemon(pokemon) */
}
