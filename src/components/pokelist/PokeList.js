import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import {
    ListaDePokemons,
    Card,
    CardImagem,
    CardContent,
    Botoes,
    Botao,
    TiposPokemon,
} from "./StyledPokeList";
import { useNavigate } from "react-router-dom";
import { goToDetailPage } from "../../router/Coordinator";
import { ContextPokedex } from "../../context/ContexPokedex";
import { Modal } from "../modal/Modal";

export default function PokeList() {
    const navigate = useNavigate();
    const { infoPokemons, capturarPokemon, pokedex } =
        useContext(ContextPokedex);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const { id } = useParams();

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
        <ListaDePokemons>
            {infoPokemons.map((pokemon) => (
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
                        <h2>{`${pokemon.name?.[0].toUpperCase()}${
                            pokemon.name?.substring(1) ?? <p>Carregando...</p>
                        }`}</h2>

                        <Botoes>
                            <Botao
                                onClick={() => {
                                    setIsModalVisible(true);
                                    capturarPokemon(pokemon);
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
