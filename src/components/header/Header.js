import React from "react";
import { useNavigate } from "react-router-dom";
import { goToPokedexPage } from "../../router/coordinator";
import { HeaderBG, HeaderContent, Pokeball } from "./StyledHeader";
import logo from "../../assets/img/logo.svg";

export const Header = () => {
    const navigate = useNavigate();

    return (
        <HeaderBG>
            <HeaderContent>
                <img src={logo} alt="Logo do Pokedéx" />
                <Pokeball onClick={() => goToPokedexPage(navigate)}></Pokeball>
            </HeaderContent>
        </HeaderBG>
    );
};
