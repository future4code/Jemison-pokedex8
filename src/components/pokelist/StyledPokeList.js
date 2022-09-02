import styled from "styled-components";

export const ListaDePokemons = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    margin: 0 auto;
    max-width: 1200px;
    padding: 40px 10px;
`;

export const Card = styled.li`
    max-width: 275px;
`;

export const CardImagem = styled.div`
    background: #f2f2f2;
    padding: 20px 30px;
    border-radius: 10px;
`;

export const CardContent = styled.div`
    h2 {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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
    }

    button:last-child {
        background: #ee6b2f;
    }
`;
export const Botao = styled.button`
    border: none;
    padding: 0.675rem 1.25rem;
    border-radius: 4px;
    color: #fff;
    font-size: 1rem;
    font-weight: 500;
`;
export const Typography = styled.p``;
