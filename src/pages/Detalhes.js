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
import { Progress, ProgressDone } from "../components/StyledProgress";

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

    const stats = (stats) => data.stats?.[0].base_stat;

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
            data.id === 20
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
                            <h2>Evoluções</h2>
                            <li>
                                <span>Pré-evolução:</span> {`**`}
                            </li>
                            <li>
                                <span>Evolução:</span> {`**`}
                            </li>
                        </CardContent>
                    </Contents>
                </ContainerDetalhes>
            </Body>
        </div>
    );
}
