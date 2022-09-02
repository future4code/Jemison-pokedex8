// O usuário deve receber uma lista de pokemons vinda da API. Ele pode armazenar Pokemons em sua Pokedex clicando em cada um.

import React from "react";
import { useContext } from "react";
import { ContextPokedex } from "../context/ContexPokedex";
import { Body, Tela } from "../styled";
import PokeList from "../components/pokelist/PokeList";
import { Header } from "../components/header/Header";

export default function Home() {
    const { infoPokemons } = useContext(ContextPokedex);

    return (
        <Tela>
            <Header />
            <Body>
                <PokeList pokeInfos={infoPokemons} />
            </Body>
        </Tela>
    );
}
