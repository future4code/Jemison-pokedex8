import React from "react";
import { useNavigate } from "react-router-dom";
import { goToHomePage, goToPokedexPage } from "../../router/Coordinator";
import { HeaderBG, HeaderContent, Pokeball, ReturnToHome_Details } from "./StyledHeader";
import logo from "../../assets/img/logo.svg";
import { ImUndo2 } from "react-icons/im"

export const HeaderDetail = () => {
    const navigate = useNavigate();

    return (
        <HeaderBG>
            <HeaderContent>
                <ReturnToHome_Details onClick={() => goToHomePage(navigate)}><ImUndo2 size="25px" /></ReturnToHome_Details>
                <img src={logo} alt="Logo do Pokemon" />
                <Pokeball onClick={() => goToPokedexPage(navigate)}></Pokeball>
            </HeaderContent>
        </HeaderBG>
    );
};