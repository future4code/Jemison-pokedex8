import styled from "styled-components";

export const ListaDePokemons = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px 20px;
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 10px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr 1fr;
    }
`;

export const Card = styled.li`
    max-width: 100%;
    transition: 0.4s;
    opacity: 0.9;

    &:hover {
        animation: jump 0.4s forwards;
        opacity: 1;
    }

    @keyframes jump {
        10% {
            transform: translateY(-10px);
        }
    }
`;

export const CardImagem = styled.div`
    padding: 20px 30px;
    border-radius: 10px;
    box-shadow: 3px 3px 10px 0 rgba(0, 0, 0, 0.2);

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;

        p {
            color: rgba(0, 0, 0, 0.5);
            font-weight: 500;
            text-transform: capitalize;

            &::before {
                content: "Nº ";
            }
        }
    }
`;

export const TiposPokemon = styled.div`
    span {
        font-size: 14px;
        color: #fff;
        padding: 5px 10px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 4px;
        text-align: center;
        text-transform: capitalize;
    }
`;

export const CardContent = styled.div`
    h2 {
        font-weight: 500;
        text-transform: capitalize;
        padding: 10px 20px;

        @media screen and (max-width: 600px) {
            font-size: 1.25rem;
        }
    }
`;

export const Botoes = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;

    button:first-child {
        background: #a4a4a4;
        &:hover {
            background: #8b8b8b;
        }
    }

    button:last-child {
        background: #ee6b2f;
        &:hover {
            background: #da471b;
        }
    }

    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr;
    }
`;
export const Botao = styled.button`
    border: none;
    padding-top: 0.675rem;
    padding-bottom: 0.675rem;
    border-radius: 4px;
    color: #fff;
    font-size: 1rem;
    font-weight: 500;
    transition: 0.3s;
`;
