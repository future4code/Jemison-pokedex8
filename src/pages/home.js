// O usuário deve receber uma lista de pokemons vinda da API. Ele pode armazenar Pokemons em sua Pokedex clicando em cada um.

import React, { useEffect, useState } from "react";
import { goToPokedexPage } from "../router/coordinator";
import { useNavigate } from "react-router-dom";

import { Header, HeaderBG, Body, Pokedex, Tela } from "../styled";
import { PokeList } from "../components/PokemonCard/EstiloPokeCard";
import PokeCard from "../components/PokemonCard/PokeCard";

import logo from "../assets/img/logo.svg";
import axios from "axios";

export default function Home() {
    // USE STATE
    const [pokemons, setPokemons] = useState([]);

    // USENAVIGATE
    const navigate = useNavigate();

    // USE EFFECT
    const getPokemons = () => {
        let endpoints = [];
        for (let i = 1; i < 20; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
        }

        axios
            .get("https://pokeapi.co/api/v2/pokemon/")
            .then((res) => setPokemons(res.data.results))
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getPokemons();
    }, []);

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
                    {pokemons.map((pokemon, key = { key }) => (
                        <PokeCard name={pokemon.name} />
                    ))}
                </PokeList>
            </Body>
        </Tela>
    );
}

/* <button onClick={() => goToDetailPage(navigate)}>
                    Detalhes
                </button> */
