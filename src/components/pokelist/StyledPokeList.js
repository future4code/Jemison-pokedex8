import styled from "styled-components";

export const ListaDePokemons = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 40px 20px;
    margin: 0 auto;
    max-width: 1200px;
    padding: 40px 10px;
`;

export const Card = styled.li`
    max-width: 275px;
    transition: 0.4s;

    &:hover {
        animation: jump 0.4s forwards;
    }

    @keyframes jump {
        10% {
            transform: translateY(-10px);
        }
    }
`;

export const CardImagem = styled.div`
    background: #f2f2f2;
    padding: 20px 30px;
    border-radius: 10px;

    p {
        color: #a4a4a4;
    }
`;

export const CardContent = styled.div`
    h2 {
        font-weight: 500;
        text-transform: capitalize;
        padding: 10px 20px;
    }
`;

export const Botoes = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
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
`;
export const Botao = styled.button`
    border: none;
    padding: 0.675rem 1.25rem;
    border-radius: 4px;
    color: #fff;
    font-size: 1rem;
    font-weight: 500;
    transition: 0.3s;
`;
