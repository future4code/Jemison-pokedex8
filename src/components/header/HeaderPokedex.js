import React from "react";
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../../router/coordinator";
import { HeaderBG, HeaderContent, Pokeball } from "./StyledHeader";
import logo from "../../assets/img/pokedex_logo.png";

export const HeaderPokedex = () => {
    const navigate = useNavigate();

    return (
        <HeaderBG>
            <HeaderContent>
                <img src={logo} alt="Logo do Pokedéx" />
                <Pokeball onClick={() => goToHomePage(navigate)}></Pokeball>
            </HeaderContent>
        </HeaderBG>
    );
};