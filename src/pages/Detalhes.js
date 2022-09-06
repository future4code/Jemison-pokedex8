import React from "react";
import { HeaderDetail } from "../components/header/HeaderDetail";
import { useFetch } from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import {
    Details,
    Titulo,
    ImagensPokemon,
    ImagemPokemon,
    ContainerDetalhes,
    DetailsTitle,
    DetailsContent,
    StatsPokemon,
    Contents,
    Habilidades,
    Evolucao,
    Evolucoes,
    BaseDeStatus,
    TypesContent,
} from "../components/detalhes/StyledDetalhes";

export function Detalhes() {
    //Pega o id passado pelo parâmetros da URL
    const { id } = useParams();
    //faz uma requisição na API que recebe dentro da URL o id do pokemon especifico
    const { data } = useFetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

    //funções para mostrar o tipo de pokemon e sua habilidade
    const type1 = (types) => types?.[0].type.name;
    const type2 = (types) => types?.[0].type.name;
    const ability1 = (abilities) => abilities?.[0].ability.name;
    const ability2 = (abilities) => abilities?.[1].ability.name;

    const stats = (stats) => data.stats?.[0].base_stat;

    return (
        <div>
            <HeaderDetail />

            <Titulo>
                <h1>
                    <span>{data.id} - </span>
                    {data.name}
                </h1>
            </Titulo>

            <ContainerDetalhes>
                <ImagensPokemon>
                    <ImagemPokemon title="Imagem frontal">
                        <img
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                            alt={data.name}
                        />
                    </ImagemPokemon>
                    <ImagemPokemon title="Imagem de costas">
                        <img
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`}
                            alt={data.name}
                        />
                    </ImagemPokemon>
                </ImagensPokemon>

                <DetailsContent>
                    <BaseDeStatus>
                        <h2>Base de status</h2>
                        <li>
                            <span>Vida:</span>{" "}
                            {`${data.stats?.[0].base_stat}` ?? `Carregando`}
                        </li>
                        <li>
                            <span>Ataque:</span>{" "}
                            {`${data.stats?.[1].base_stat}` ?? `Carregando`}
                        </li>
                        <li>
                            <span>Defesa:</span>{" "}
                            {`${data.stats?.[2].base_stat}` ?? `Carregando`}
                        </li>
                        <li>
                            <span>Ataque Especial:</span>{" "}
                            {`${data.stats?.[3].base_stat}` ?? `Carregando`}
                        </li>
                        <li>
                            <span>Defesa Especial:</span>{" "}
                            {`${data.stats?.[4].base_stat}` ?? `Carregando`}
                        </li>
                        <li>
                            <span>Velocidade:</span>{" "}
                            {`${data.stats?.[5].base_stat}` ?? `Carregando`}
                        </li>
                    </BaseDeStatus>
                </DetailsContent>

                <Contents>
                    <TypesContent>
                        <li>
                            <span>Tipo 1:</span>{" "}
                            {`${
                                type1(data.types)?.[0].toUpperCase() ?? (
                                    <li>Carregando</li>
                                )
                            }${
                                type1(data.types)?.substring(1) ?? (
                                    <li>Carregando</li>
                                )
                            }`}
                        </li>

                        <li>
                            <span>Tipo 2:</span>{" "}
                            {`${
                                type2(data.types)?.[0].toUpperCase() ?? (
                                    <li>Carregando</li>
                                )
                            }${
                                type2(data.types)?.substring(1) ?? (
                                    <li>Carregando</li>
                                )
                            }`}
                        </li>
                    </TypesContent>

                    <DetailsContent>
                        <Habilidades>
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
                        </Habilidades>

                        <Evolucoes>
                            <h2>Evoluções</h2>
                            <li>
                                <span>Pré-evolução:</span> {`**`}
                            </li>
                            <li>
                                <span>Evolução:</span> {`**`}
                            </li>
                        </Evolucoes>
                    </DetailsContent>
                </Contents>
            </ContainerDetalhes>
        </div>
    );
}