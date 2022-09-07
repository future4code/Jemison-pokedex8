import styled from "styled-components";
import img from "../../assets/img/pokeball.svg";

// Estilização da página de descrição do pokemon

export const Body = styled.div`
    padding: 0 20px 40px 20px;
`;

export const Titulo = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    font-weight: normal;
    text-transform: capitalize;
    padding: 40px 20px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

    span::before {
        content: "Nº ";
    }
`;

export const ContainerDetalhes = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 2fr;
    align-items: flex-start;
    gap: 40px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px;
    border-radius: 10px;
    position: relative;
    li {
        font-size: 1.125rem;

        span {
            font-weight: 500;
        }
    }

    &::before {
        display: block;
        content: "";
        background: url(${img}) no-repeat;
        background-position: 320px;
        width: 640px;
        height: 640px;
        position: absolute;
        top: 0;
        right: 0;
        opacity: 0.1;
    }

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 2fr 1fr;
    }

    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr 2fr;
    }

    @media screen and (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;

export const CardContent = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 5px 5px 15px 0 rgba(0, 0, 0, 0.2);
    z-index: 2;

    h2 {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }

    li {
        span {
            font-family: monospace;
            font-weight: 700;
        }
    }

    img {
        height: auto;
    }
`;

export const Tipos = styled.div`
    li {
        display: flex;
        gap: 5px;
    }
`;

export const ImagensPokemon = styled.ul`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 40px;
    max-width: 100%;

    @media screen and (max-width: 600px) {
        flex-wrap: nowrap;
        flex-direction: row;
    }
`;

export const Contents = styled.div`
    display: grid;
    gap: 40px;

    &:first-child {
        background: blue;
    }
    @media screen and (max-width: 800px) {
        grid-column: 1/-1;
    }
`;
