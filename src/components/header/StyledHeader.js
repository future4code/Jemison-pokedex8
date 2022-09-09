import styled from "styled-components";
import pokeball from "../../assets/img/pokeball.svg";

export const HeaderBG = styled.header`
    background: #ef5350;
`;

export const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px 10px;

    img {
        width: 160px;
    }
`;

// POKEDEX
export const PokeballIcon = styled.button`
    background: none;
    border: none;
    transition: 0.3s;
    position: fixed;
    right: 15px;
    padding: 5px;
    z-index: 999999;

    &::before {
        display: inline-block;
        content: "";
        width: 40px;
        height: 40px;
        background: url(${pokeball}) no-repeat;
        background-size: contain;
        margin: 0 auto;
        transition: 0.3s;
        animation: inicio 3s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    }

    &:hover {
        animation: hover 0.3s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite;
    }

    @keyframes inicio {
        from {
            transform: translate(-500px, 0) rotate(0);
            opacity: 0;
        }

        to {
            transform: translate(0, 0) rotate(360deg);
            opacity: 1;
        }
    }

    @keyframes hover {
        from {
            transform: translate(-5px, 0);
        }

        to {
            transform: translate(0, 0);
        }
    }
`;

export const ReturnToHome = styled.button`
    background: none;
    border: none;
    transition: 0.3s;
    position: absolute;
    left: 15px;
    padding: 5px;
    width: 50px;
    height: 50px;
`;

export const ReturnIcon = styled.img``;
