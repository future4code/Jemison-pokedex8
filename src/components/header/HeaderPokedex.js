import React from "react";
import { useNavigate } from "react-router-dom";
import { goToHomePage, goToPreviousPage } from "../../router/Coordinator";
import {
    HeaderBG,
    HeaderContent,
    ReturnIcon,
    ReturnToHome,
} from "./StyledHeader";
import logo from "../../assets/img/pokedex_logo.png";
import back from "../../assets/img/back.svg";

export const HeaderPokedex = () => {
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
                <img src={logo} alt="Logo do Pokedéx" />
            </HeaderContent>
        </HeaderBG>
    );
};
