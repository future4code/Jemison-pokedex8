import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { ContextPokedex } from "./context/ContexPokedex";
import { GlobalStyles } from "./styled";
import Router from "./router/router";

export default function App() {
    const [pokemons, setPokemons] = useState([]);
    const [infoPokemons, setInfoPokemons] = useState([]);
    const [pokedex, setPokedex] = useState([]);

    const getAllPokemons = () => {
        const url = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`;

        axios
            .get(url)
            .then((response) => {
                setPokemons(response.data.results);
            })
            .catch((error) => {
                alert("Erro na requisição");
            });
    };

    useEffect(() => {
        getAllPokemons();
    }, []);

    useEffect(() => {
        let endpoints = [];
        pokemons.forEach((pokemon) => {
            axios
                .get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                .then((response) => {
                    endpoints.push(response.data);
                    if (endpoints.length === 20) {
                        const ordenaListaPokemons = endpoints.sort((a, b) => {
                            return a.id - b.id;
                        });
                        setInfoPokemons(ordenaListaPokemons);
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        });
    }, [pokemons]);

    const capturarPokemon = (pokeAnalisado) => {
        setInfoPokemons(
            infoPokemons.filter((pokemon) => pokemon.id !== pokeAnalisado.id) // Aqui chamamos a função(estado) que atualiza o seu estado, depois filtramos cada item(pokémon), que esta dentro do estado. comparamos o pokémon pelo id, se o id for diferente, a função executado busca esse id
        );
        setPokedex([...pokedex, pokeAnalisado]); // aqui usamos o spread, que guarda o copia o estado inicial do pokédex, e adiciona o pokémon que foi analisado antes
    }; // passamos essa função via context para o PokeCard

    return (
        <ContextPokedex.Provider
            value={{
                infoPokemons,
                capturarPokemon,
                pokedex,
            }}>
            <Router />
            <GlobalStyles />
        </ContextPokedex.Provider>
    );
}
