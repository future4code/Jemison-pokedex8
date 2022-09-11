// O usuário deve receber uma lista de pokemons vinda da API. Ele pode armazenar Pokemons em sua Pokedex clicando em cada um.
import React, { useContext, useState } from "react";
import { ContextPokedex } from "../context/ContexPokedex";
import { Body, Tela } from "../styled";
import PokeList from "../components/pokelist/PokeList";
import { HeaderHome } from "../components/header/HeaderHome";
import { Paginacao } from "../components/paginacao/Paginacao";

export default function Home() {
    const { infoPokemons, pagina, setPagina, totalPaginas } =
        useContext(ContextPokedex);

    const onLeftClickHandler = () => {
        if (pagina > 0) {
            setPagina(pagina - 1);
        }
    };

    const onRightClickHandler = () => {
        if (pagina + 1 !== totalPaginas) {
            setPagina(pagina + 1);
        }
    };

    return (
        <Tela>
            <HeaderHome />
            <Body>
                <Paginacao
                    pagina={pagina + 1}
                    totalPaginas={totalPaginas}
                    onLeftClick={onLeftClickHandler}
                    onRightClick={onRightClickHandler}
                />

                <PokeList pokeInfos={infoPokemons} />

                <Paginacao
                    pagina={pagina + 1}
                    totalPaginas={totalPaginas}
                    onLeftClick={onLeftClickHandler}
                    OnRightClick={onRightClickHandler}
                />
            </Body>
        </Tela>
    );
}
