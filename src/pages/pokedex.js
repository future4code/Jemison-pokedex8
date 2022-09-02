// O usuário deve pode ver os Pokemons que foram adicionados em sua Pokedex.

import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import {ContextPokedex} from "../ContextPokedex/ContexPokedex"

/// Copiar logica e estrutura do pokecard

export default function Pokedex() {
    const navigate = useNavigate();
    const {pokedex} = useContext(ContextPokedex);



    return( 
    <div>
         {pokedex.map((pokemom) =>(
             <>
                <p>{pokemom.name}</p>
                <img src={pokemom[`sprites`][`other`][`official-artwork`][`front_default`]}
                />

                        
            </>
        ))}
        
    </div>);
}
