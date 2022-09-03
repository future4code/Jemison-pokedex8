import React from "react";
import { useNavigate } from "react-router-dom";
import { goToBack } from "../../router/Coordinator";
import { HeaderBG, HeaderContent, Pokeball, ReturnToHome_Pokedex } from "./StyledHeader";
import logo from "../../assets/img/pokedex_logo.png";
import { ImRedo2 } from "react-icons/im";
export const HeaderPokedex = () => {
    const navigate = useNavigate();

    return (
        <HeaderBG>
            <HeaderContent>
                <ReturnToHome_Pokedex onClick={() => goToBack(navigate)}><ImRedo2 size="25px" /></ReturnToHome_Pokedex>
                <img src={logo} alt="Logo do Pokedéx" />
            </HeaderContent>
        </HeaderBG>
    );
};