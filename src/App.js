import React, {useState} from "react";
import axios from "axios";
import { useEffect } from "react";
import Router from "./router/router";
import {ContextPokedex} from "./ContextPokedex/ContexPokedex"
import { GlobalStyles } from "./styled";

export default function App() {
    const [pokemons, setPokemons] = useState([]);
    const [inforPokemons, setInforPokemons] = useState([]);
    const [pokedex, setPokex] = useState([])
    
  
    const getAllPokemons = () => {
      axios
        .get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
        .then((response) => {
          setPokemons(response.data.results);
        })
        .catch((error) => {
          console.log(error);
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
              setInforPokemons(ordenaListaPokemons);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      });
    }, [pokemons]);


    const capturarPokemon = (pokeAnalizado) =>{
      setInforPokemons(
        inforPokemons.filter((pokemom)=>
          pokemom.id !== pokeAnalizado.id
        )// Aqui chamamos a funçaõ(estado) que atualiza o seu estado, depois filtramos cada item(pokemon), que esta dentro do estado. comparamos o pokemom pelo id, se o id for diferente, a função executado busca esse id
      );
      setPokex([...pokedex, pokeAnalizado]) // aqui usamos o spred, que guarda o copia o estado inicial do pokedex, e adiciona o pokemom que foi analizado antes 
    } // passamos essa função via contex para o PokeCard

    return (
        <ContextPokedex.Provider
            value={{
                inforPokemons,
                capturarPokemon,
                pokedex
            }}
        
        >
            <Router />
            <GlobalStyles />
        </ContextPokedex.Provider>
    );
}
