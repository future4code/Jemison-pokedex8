import React from "react";
import {
    ListaDePokemons,
    Card,
    CardImagem,
    CardContent,
    Botoes,
    Botao,
} from "./StyledPokeList";
import { useNavigate } from "react-router-dom";
import { goToDetailPage } from "../../router/coordinator";
import { useContext } from "react";
import { ContextPokedex } from "../../context/ContexPokedex";

export default function PokeCard() {
    const navigate = useNavigate();
    const { infoPokemons, capturarPokemon } = useContext(ContextPokedex);

    return (
        <ListaDePokemons>
            {infoPokemons.map((pokemon) => (
                <Card>
                    <CardImagem>
                        <p>Nº {pokemon.id}</p>

                        <img
                            src={pokemon.sprites.other.home.front_default}
                            // A versão antiga era: src={pokemon[`sprites`][`other`][`official-artwork`][`front_default`]}
                            alt="Imagem do Pokemon"
                        />
                    </CardImagem>

                    <CardContent>
                        <h2>{pokemon.name}</h2>

                        <Botoes>
                            <Botao onClick={() => capturarPokemon(pokemon)}>
                                Adicionar
                            </Botao>
                            <Botao onClick={() => goToDetailPage(navigate)}>
                                Ver detalhes
                            </Botao>
                        </Botoes>
                    </CardContent>
                </Card>
            ))}
        </ListaDePokemons>
    );
}
