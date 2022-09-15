import React, { useState, useEffect } from "react";
import axios from "axios";
import { ContextPokedex } from "../context/ContexPokedex";

export function PokedexProvider(props) {
    const [pokemons, setPokemons] = useState([]);
    const [infoPokemons, setInfoPokemons] = useState([]);
    const [pokedex, setPokedex] = useState([]);
    const [pagina, setPagina] = useState(0);
    const [totalPaginas, setTotalPaginas] = useState(0);
    const itemPorPagina = 30;

    const getAllPokemons = () => {
        const url = `https://pokeapi.co/api/v2/pokemon?limit=${itemPorPagina}&offset=${
            pagina * itemPorPagina
        }`;

        axios
            .get(url)
            .then((response) => {
                setPokemons(response.data.results);
                setTotalPaginas(Math.ceil(response.data.count / itemPorPagina));
            })
            .catch((error) => {
                alert("Erro na requisição");
            });
    };

    useEffect(() => {
        getAllPokemons();
    }, [pagina]);

    useEffect(() => {
        let endpoints = [];
        pokemons.forEach((pokemon) => {
            axios
                .get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                .then((response) => {
                    endpoints.push(response.data);
                    if (endpoints.length === itemPorPagina) {
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
        ); // Aqui devemos mapear o estado que já foi populado. Nesse caso, pokedex. Usamos a mesmo logica da função acima. Ou seja, filtramos o estado da pokedex, verificando se o id analisado é diferente do pokémon que está recebendo a ação

        setInfoPokemons(...infoPokemons, pokeAnalisado);
        // Aqui precisamos guardar novamente o pokemon, no estado que está sendo mapeado na home. Usamos o spread para copiarmos o estado atual, atualizando-o depois da ação!
    };

    return (
        <ContextPokedex.Provider
            value={{
                infoPokemons,
                capturarPokemon,
                removerPokemon,
                pokedex,
                pagina,
                setPagina,
                totalPaginas,
                setTotalPaginas,
            }}>
            {props.children}
        </ContextPokedex.Provider>
    );
}
