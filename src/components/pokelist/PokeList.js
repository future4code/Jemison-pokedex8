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
    const { infoPokemons, capturarPokemon, pokedex } =useContext(ContextPokedex);
    const [isModalVisible, setIsModalVisible] = useState(false);

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
            case "poison":
                return "#b97fc9";
                break;
            case "electric":
                return "#eed535";
                break;
            case "ground":
                return "#ab9842";
                break;
            case "fairy":
                return "#fdb9e9";
                break;
            case "fighting":
                return "#d56723";
                break;
            case "psychic":
                return "#f366b9";
                break;
            case "rock":
                return "#a38c21";
                break;
            case "ghost":
                return "#7b62a3";
                break;
            case "ice":
                return "#51c4e7";
                break;
            case "dragon":
                return "#f16e57";
                break;
            case "dark":
                return "#707070";
                break;
            case "steel":
                return "#9eb7b8";
                break;
            default:
                return "#f2f2f2";
        }
    };

    return (
        <ListaDePokemons>
            {infoPokemons.map((pokemon) => (
                <Card key={pokemon.id}>
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
                                    {pokemon.types?.[0].type.name}
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
                    <Modal key={pokemon.id} onClose={() => setIsModalVisible(false)}>
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
