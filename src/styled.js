import styled, { createGlobalStyle } from "styled-components";
import pokeball from "./assets/img/pokeball.svg";
import pokeball2 from "./assets/img/pokeball2.svg";

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

ul {
    list-style: none;
}

a {
    display: block;
    text-decoration: none;
    transition: .3s;
}

img {
    display: block;
    max-width: 100%;
}

button {
    display: inline-block;
    cursor: pointer;
}
`;

// HOME

export const Tela = styled.div``;

export const HeaderBG = styled.header``;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 326.5px;

    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;

    img {
        height: 120px;
    }
`;

export const Body = styled.body`

`;

// POKEDEX
export const Pokedex = styled.button`
    padding: 12px 18px;
    border: none;
    border-radius: 10px;
    color: #919191;
    background: none;
    font-size: 18px;
    font-family: monospace;
    text-align: center;
    transition: 0.3s;

    &::before {
        display: block;
        content: "";
        width: 40px;
        height: 40px;
        background: url(${pokeball}) no-repeat;
        background-size: contain;
        margin: 0 auto;
        margin-bottom: 10px;
        transition: 0.3s;
    }

    &:hover {
        background: #e3350d;
        color: #fff;

        &::before {
            background: url(${pokeball2}) no-repeat;
            background-size: contain;
        }
    }
`;

// DETALHES
