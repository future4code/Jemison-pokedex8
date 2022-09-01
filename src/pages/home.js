// O usuário deve receber uma lista de pokemons vinda da API. Ele pode armazenar Pokemons em sua Pokedex clicando em cada um.

import React, { useEffect, useState } from "react";
import { goToPokedexPage } from "../router/coordinator";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import {ContextPokedex} from "../ContextPokedex/ContexPokedex"
import { Header, HeaderBG, Body, Pokedex, Tela } from "../styled";
import { PokeList } from "../components/PokemonCard/EstiloPokeCard";
import PokeCard from "../components/PokemonCard/PokeCard";

import logo from "../assets/img/logo.svg";
import axios from "axios";

export default function Home() {

    // USENAVIGATE
    const navigate = useNavigate();
    const {inforPokemons} = useContext(ContextPokedex)
    
    return (
        <Tela>
            <HeaderBG>
                <Header>
                    <Pokedex onClick={() => goToPokedexPage(navigate)}>
                        Pokedéx
                    </Pokedex>
                    <img src={logo} alt="Logo do Pokedéx" height={120} />
                </Header>
            </HeaderBG>

            <Body>
                {/* Lista de Pokemons. Se trata de uma ul. Dentro dela, fiz o
                teste e conseguir mapear na cagada o estado Pokemon do UseState.
                Peguei o nome que tinha na api 'name'. */}
                <PokeList>
                    <PokeCard pokeInfos ={inforPokemons}></PokeCard>
                </PokeList>
            </Body>
        </Tela>
    );
}

/* <button onClick={() => goToDetailPage(navigate)}>
                    Detalhes
                </button> */
