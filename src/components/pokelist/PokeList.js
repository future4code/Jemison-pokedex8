import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
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
import { ContextPokedex } from "../../context/ContexPokedex";
import { Modal } from "../modal/Modal";

export default function PokeList() {
    const navigate = useNavigate();
    const { infoPokemons, capturarPokemon, pokedex } =
        useContext(ContextPokedex);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const { id } = useParams();

    return (
        <ListaDePokemons>
            {infoPokemons.map((pokemon) => (
                <Card>
                    <CardImagem>
                        <p>Nº {pokemon.id}</p>

                        <img
                            src={pokemon.sprites.other.home.front_default}
                            alt={pokemon.name}
                        />

                        <p>{pokemon.types[0].type.name}</p>
                    </CardImagem>

                    <CardContent>
                        <h2>{`${pokemon.name?.[0].toUpperCase()}${
                            pokemon.name?.substring(1) ?? <p>Carregando...</p>
                        }`}</h2>

                        <Botoes>
                            <Botao
                                onClick={() => {
                                    setIsModalVisible(true);
                                    capturarPokemon(pokemon, id);
                                }}>
                                Capturar
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

            {pokedex.map((pokemon) =>
                isModalVisible ? (
                    <Modal onClose={() => setIsModalVisible(false)}>
                        <h2>
                            <span>{pokemon.name}</span> capturado!
                        </h2>
                        <img
                            src={pokemon.sprites.front_default}
                            alt={pokemon.name}
                        />
                    </Modal>
                ) : null
            )}
        </ListaDePokemons>
    );
}
