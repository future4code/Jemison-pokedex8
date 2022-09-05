import React, { useState, useEffect } from "react";
import axios from "axios";
import { ContextPokedex } from "./context/ContexPokedex";
import { GlobalStyles } from "./styled";
import { Router } from "../src/router/router";

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

    const removerPokemon = (pokeAnalisado) => {
        setPokedex(
            pokedex.filter((pokemon) => pokemon.id !== pokeAnalisado.id)
        ); // Aqui devemos mapear o estado que já foi populado. Nesse caso, pokedex. Usamos a mesmo logica da função acima. Ou seja, filtramos o estado da pokedex, verificando se o id analizado é diferente do pokémon que está recebendo a ação

        setInfoPokemons(...infoPokemons, pokeAnalisado);
        // Aqui precisamos guardar novamente o pokemom, no estado que está sendo mapeado na home. Usamos o spred para copiarmos o estado atual, atualizando-o depois da ação!
    };

    return (
        <ContextPokedex.Provider
            value={{
                infoPokemons,
                capturarPokemon,
                removerPokemon,
                pokedex,
            }}>
            <Router />
            <GlobalStyles />
        </ContextPokedex.Provider>
    );
}
