import React, { useState } from "react";
import { HeaderDetail } from "../components/header/HeaderDetail";
import { useFetch } from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import {
    Titulo,
    ImagensPokemon,
    ContainerDetalhes,
    Contents,
    Body,
    CardContent,
    Tipos,
} from "../components/detalhes/StyledDetalhes";
import { Progress, ProgressDone } from "../components/progress/StyledProgress";

export function Detalhes() {
    //Pega o id passado pelo parâmetros da URL
    const { id } = useParams();
    //faz uma requisição na API que recebe dentro da URL o id do pokemon especifico
    const { data } = useFetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

    //funções para mostrar o tipo de pokemon e sua habilidade
    const type1 = () =>
        data.types?.[0].type.name[0].toUpperCase() +
        data.types?.[0].type.name.substring(1);
    const type2 = () =>
        data.types?.[1].type.name[0].toUpperCase() +
        data.types?.[1].type.name.substring(1);
    const ability1 = (abilities) => abilities?.[0].ability.name;
    const ability2 = (abilities) => abilities?.[1].ability.name;

    // Função que simula uma barra de progresso
    const ProgressFunction = ({ done }) => {
        const [style, setStyle] = useState({});

        setTimeout(() => {
            const newStyle = {
                opacity: 1,
                width: `${done}%`,
            };

            setStyle(newStyle);
        }, 100);

        return (
            <Progress>
                <ProgressDone id="progress-done" style={style}>
                    {done}
                </ProgressDone>
            </Progress>
        );
    };

    // Lógicas para alterar as cores de acordo com o tipo de pokemon
    const getTypeColorContainer = (typePokemon) => {
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

    // Lógica maluca pra renderizar os dois tipos de pokemon
    const tipo = () => {
        if (
            data.id === 4 ||
            data.id === 5 ||
            data.id === 7 ||
            data.id === 8 ||
            data.id === 9 ||
            data.id === 10 ||
            data.id === 11 ||
            data.id === 19 ||
            data.id === 20 ||
            data.id === 23 ||
            data.id === 24 ||
            data.id === 25 ||
            data.id === 26 ||
            data.id === 27 ||
            data.id === 28 ||
            data.id === 29 ||
            data.id === 30 ||
            data.id === 32 ||
            data.id === 33 ||
            data.id === 35 ||
            data.id === 36 ||
            data.id === 37 ||
            data.id === 38 ||
            data.id === 50 ||
            data.id === 51 ||
            data.id === 52 ||
            data.id === 53 ||
            data.id === 54 ||
            data.id === 55 ||
            data.id === 56 ||
            data.id === 57 ||
            data.id === 58 ||
            data.id === 59 ||
            data.id === 60 ||
            data.id === 61 ||
            data.id === 63 ||
            data.id === 64 ||
            data.id === 65 ||
            data.id === 66 ||
            data.id === 67 ||
            data.id === 68 ||
            data.id === 77 ||
            data.id === 78 ||
            data.id === 86 ||
            data.id === 88 ||
            data.id === 89 ||
            data.id === 90 ||
            data.id === 92 ||
            data.id === 93 ||
            data.id === 94 ||
            data.id === 96 ||
            data.id === 97 ||
            data.id === 98 ||
            data.id === 99 ||
            data.id === 100 ||
            data.id === 101 ||
            data.id === 104 ||
            data.id === 105 ||
            data.id === 106 ||
            data.id === 107 ||
            data.id === 108 ||
            data.id === 109 ||
            data.id === 110 ||
            data.id === 113 ||
            data.id === 114 ||
            data.id === 115 ||
            data.id === 116 ||
            data.id === 117 ||
            data.id === 118 ||
            data.id === 119 ||
            data.id === 120 ||
            data.id === 121 ||
            data.id === 122 ||
            data.id === 125 ||
            data.id === 126 ||
            data.id === 127 ||
            data.id === 128 ||
            data.id === 129 ||
            data.id === 132 ||
            data.id === 133 ||
            data.id === 134 ||
            data.id === 135 ||
            data.id === 136 ||
            data.id === 137 ||
            data.id === 143 ||
            data.id === 147 ||
            data.id === 148 ||
            data.id === 150 ||
            data.id === 151
        ) {
            return <p>Não possui</p>;
        } else {
            return <p>{type2()}</p>;
        }
    };

    return (
        <div>
            <HeaderDetail />

            <Body
                style={{
                    color: getTypeColorContainer(data.types?.[0].type.name),
                    fontFamily: "monospace",
                }}>
                <Titulo>
                    <h1>
                        <span>{data.id} - </span>
                        {data.name}
                    </h1>
                </Titulo>
                <ContainerDetalhes
                    style={{
                        background: getTypeColorContainer(
                            data.types?.[0].type.name
                        ),
                    }}>
                    <ImagensPokemon>
                        <CardContent
                            title="Imagem frontal"
                            style={{
                                background: getTypeBackgroundColor(
                                    data.types?.[0].type.name
                                ),
                            }}>
                            <img
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                                alt={data.name}
                                height={200}
                                width={200}
                            />
                        </CardContent>
                        <CardContent
                            title="Imagem de costas"
                            style={{
                                background: getTypeBackgroundColor(
                                    data.types?.[0].type.name
                                ),
                            }}>
                            <img
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`}
                                alt={data.name}
                                height={200}
                                width={200}
                            />
                        </CardContent>
                    </ImagensPokemon>

                    <CardContent
                        style={{
                            background: getTypeBackgroundColor(
                                data.types?.[0].type.name
                            ),
                        }}>
                        <h2>Base de status</h2>

                        <li>
                            <span>Vida</span>
                            <ProgressFunction
                                done={
                                    `${data.stats?.[0].base_stat}` ??
                                    `Carregando`
                                }
                            />
                        </li>

                        <li>
                            <span>Ataque</span>
                            <ProgressFunction
                                done={
                                    `${data.stats?.[1].base_stat}` ??
                                    `Carregando`
                                }
                            />
                        </li>

                        <li>
                            <span>Defesa</span>
                            <ProgressFunction
                                done={
                                    `${data.stats?.[2].base_stat}` ??
                                    `Carregando`
                                }
                            />
                        </li>

                        <li>
                            <span>Ataque Especial</span>
                            <ProgressFunction
                                done={
                                    `${data.stats?.[3].base_stat}` ??
                                    `Carregando`
                                }
                            />
                        </li>

                        <li>
                            <span>Defesa Especial</span>
                            <ProgressFunction
                                done={
                                    `${data.stats?.[4].base_stat}` ??
                                    `Carregando`
                                }
                            />
                        </li>

                        <li>
                            <span>Velocidade</span>
                            <ProgressFunction
                                done={
                                    `${data.stats?.[5].base_stat}` ??
                                    `Carregando`
                                }
                            />
                        </li>
                    </CardContent>

                    <Contents>
                        <CardContent
                            style={{
                                background: getTypeBackgroundColor(
                                    data.types?.[0].type.name
                                ),
                            }}>
                            <Tipos>
                                <li>
                                    <span>Tipo 1: </span>
                                    {type1()}
                                </li>
                                <li>
                                    <span>Tipo 2: </span>
                                    {tipo()}
                                </li>
                            </Tipos>
                        </CardContent>

                        <CardContent
                            style={{
                                background: getTypeBackgroundColor(
                                    data.types?.[0].type.name
                                ),
                            }}>
                            <h2>Habilidades</h2>
                            <li>
                                <span>Habilidade 1:</span>{" "}
                                {`${
                                    ability1(
                                        data.abilities
                                    )?.[0].toUpperCase() ?? <li>Carregando</li>
                                }${
                                    ability1(data.abilities)?.substring(1) ?? (
                                        <li>Carregando</li>
                                    )
                                }`}
                            </li>

                            <li>
                                <span>Habilidade 2:</span>{" "}
                                {`${
                                    ability2(
                                        data.abilities
                                    )?.[0].toUpperCase() ?? <li>Carregando</li>
                                }${
                                    ability2(data.abilities)?.substring(1) ?? (
                                        <li>Carregando</li>
                                    )
                                }`}
                            </li>
                        </CardContent>

                        <CardContent
                            style={{
                                background: getTypeBackgroundColor(
                                    data.types?.[0].type.name
                                ),
                            }}>
                            <h2> Movimentos </h2>
                            <li>
                                <span> Movimento 1: </span> {` `}
                                {`${
                                    data.moves?.[0].move.name?.[0].toUpperCase() ?? (
                                        <li>Carregando</li>
                                    )
                                }${
                                    data.moves?.[0].move.name?.substring(1) ?? (
                                        <li>Carregando</li>
                                    )
                                }`}
                            </li>
                            <li>
                                <span> Movimento 2: </span> {` `}
                                {`${
                                    data.moves?.[1].move.name?.[0].toUpperCase() ?? (
                                        <li>Carregando</li>
                                    )
                                }${
                                    data.moves?.[1].move.name?.substring(1) ?? (
                                        <li>Carregando</li>
                                    )
                                }`}
                            </li>
                            <li>
                                <span> Movimento 3: </span> {` `}
                                {`${
                                    data.moves?.[3].move.name?.[0].toUpperCase() ?? (
                                        <li>Carregando</li>
                                    )
                                }${
                                    data.moves?.[3].move.name?.substring(1) ?? (
                                        <li>Carregando</li>
                                    )
                                }`}
                            </li>
                            <li>
                                <span> Movimento 4: </span> {` `}
                                {`${
                                    data.moves?.[4].move.name?.[0].toUpperCase() ?? (
                                        <li>Carregando</li>
                                    )
                                }${
                                    data.moves?.[4].move.name?.substring(1) ?? (
                                        <li>Carregando</li>
                                    )
                                }`}
                            </li>
                        </CardContent>
                    </Contents>
                </ContainerDetalhes>
            </Body>
        </div>
    );
}
