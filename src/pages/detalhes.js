import React from "react";
import { HeaderDetail } from "../components/header/HeaderDetail";
import { useFetch } from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import {
    ListaDePokemons,
    CardImagemDescrição,
    CardContent,
    SessãoImagens,
    Nome, Section, SectionType,
    Details, Title, StatusContainer1, StatusContainer2
} from "../components/pokelist/StyledPokeList";

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


    return (
        <div>
            <HeaderDetail />
            <h1>{`Nº${data.id}`}</h1>
            <Nome> 
                    <h1>{`${data.name?.[0].toUpperCase()}${data.name?.substring(1) ?? <p>Carregando</p>}`}</h1>
            </Nome>
            
            <ListaDePokemons>
                <SessãoImagens>
                <CardImagemDescrição>
                    <img
                        src={`https://cdn.traction.one/pokedex/pokemon/${id}.png`}
                        alt={data.name}
                    />
                </CardImagemDescrição>
                
                <CardImagemDescrição>
                    <img
                        src={`https://cdn.traction.one/pokedex/pokemon/${id}.png`}
                        alt={data.name}
                    />
                </CardImagemDescrição>
                    </SessãoImagens>



                <CardContent>
                </CardContent>

                <StatusContainer1>
                    <Title>Stats</Title>
                    <Details>
                    <p>
                        Vida:{" "}
                        <span>
                            {`${88} *` ?? `Carregando`}
                        </span>
                    </p>
                    </Details>
                    <Details>
                    <p>
                        Ataque:{" "}
                        <span>
                            {`${35} *` ?? `Carregando`}
                        </span>
                    </p>
                    </Details>
                    <Details>
                    <p>
                        Defesa:{" "}
                        <span>
                            {`${58} *` ?? `Carregando`}
                        </span>
                    </p>
                    </Details>
                    <Details>
                    <p>
                        Ataque Especial:{" "}
                        <span>
                        {`${58} *` ?? `Carregando`}
                        </span>
                    </p>
                    </Details>
                    <Details>
                    <p>
                        Defesa Especial:{" "}
                        <span>
                        {`${58} *` ?? `Carregando`}
                        </span>
                    </p>
                    </Details>
                    <Details>
                    <p>
                        Velocidade:{" "}
                        <span>
                        {`${58} *` ?? `Carregando`}
                        </span>
                    </p>
                    </Details>


                </StatusContainer1>
                <Section>
                    <SectionType>
                        <p>
                            Type 1:{" "}
                            {`${type1(data.types)?.[0].toUpperCase() ?? <p>Carregando</p>}${type1(data.types)?.substring(1) ?? <p>Carregando</p>}`}
                        </p>
                        <p>
                            Type 2:{" "}
                            {`${type2(data.types)?.[0].toUpperCase() ?? <p>Carregando</p>}${type2(data.types)?.substring(1) ?? <p>Carregando</p>}`}

                        </p>
                    </SectionType>
                    <StatusContainer2>
                        <Title>Abilidades</Title>
                        <Details>
                            <p>
                                Habilidade 1:{" "}
                                <span>
                                    {`${ability1(data.abilities)?.[0].toUpperCase() ?? <p>Carregando</p>}${ability1(data.abilities)?.substring(1) ?? <p>Carregando</p>}`}
                                </span>
                            </p>
                        </Details>
                        <Details>
                            <p>
                                Habilidade 2:{" "}
                                <span>
                                    {`${ability2(data.abilities)?.[0].toUpperCase() ?? <p>Carregando</p>}${ability2(data.abilities)?.substring(1) ?? <p>Carregando</p>}`}
                                </span>
                            </p>
                        </Details>
                        <Title>Evoluções</Title>
                        <Details>
                            <p>
                                Pré-evolução:{" "}
                                <span>
                                    {`**`}
                                </span>
                            </p>
                        </Details>
                        <Details>
                            <p>
                                Evolução:{" "}
                                <span>
                                    {`**`}
                                </span>
                            </p>
                        </Details>

                    </StatusContainer2>
                </Section>

            </ListaDePokemons>
        </div>
    );
}
