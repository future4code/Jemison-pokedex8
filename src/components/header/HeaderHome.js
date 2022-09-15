import React from "react";
import { useNavigate } from "react-router-dom";
import { goToPokedexPage } from "../../router/Coordinator";
import { HeaderBG, HeaderContent, PokeballIcon } from "./StyledHeader";
import logo from "../../assets/img/logo.svg";

export const HeaderHome = () => {
    const navigate = useNavigate();

    return (
        <HeaderBG>
            <HeaderContent>
                <img src={logo} alt="Logo da Home" />
                <PokeballIcon
                    onClick={() => goToPokedexPage(navigate)}
                    title="Conferir Pokémons capturados"></PokeballIcon>
            </HeaderContent>
        </HeaderBG>
    );
};
