import React from "react";
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../../router/Coordinator";
import { HeaderBG, HeaderContent, Pokeball } from "./StyledHeader";
import logo from "../../assets/img/logo.svg";

export const HeaderDetail = () => {
    const navigate = useNavigate();

    return (
        <HeaderBG>
            <HeaderContent>
                <img src={logo} alt="Logo do Pokemon" />
                <Pokeball onClick={() => goToHomePage(navigate)}></Pokeball>
            </HeaderContent>
        </HeaderBG>
    );
};