import React from "react";
import { useNavigate } from "react-router-dom";
import { goToHomePage, goToPokedexPage } from "../../router/Coordinator";
import {
    HeaderBG,
    HeaderContent,
    PokeballIcon,
    ReturnIcon,
    ReturnToHome,
} from "./StyledHeader";
import logo from "../../assets/img/logo.svg";
import back from "../../assets/img/back.svg";

export const HeaderDetail = () => {
    const navigate = useNavigate();

    return (
        <HeaderBG>
            <HeaderContent>
                <ReturnToHome onClick={() => goToHomePage(navigate)}>
                    <ReturnIcon
                        src={back}
                        title="Voltar para a página inicial"
                    />
                </ReturnToHome>

                <img src={logo} alt="Logo do Pokemon" />
                <PokeballIcon
                    onClick={() => goToPokedexPage(navigate)}
                    title="Conferir Pokémons capturados"></PokeballIcon>
            </HeaderContent>
        </HeaderBG>
    );
};
