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
        text-transform: capitalize;
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

// Estilização da página de descrição do pokemon
export const Nome = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SessãoImagens = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
export const CardImagemDescrição = styled.section`
    display: flex;
    align-items: center;
    background: #f2f2f2;
    padding: 20px 30px;
    border-radius: 10px;
    margin: 2px;
    height: 150px;

    img {
        width: 100px;
    }
`;

export const StatusContainer1 = styled.section`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin: 2px;
    height: 300px;
    width: 200px;
    background: #f2f2f2;
    border-radius: 10px;
`;

export const Section = styled.section`
    height: 300px;
    width: 300px;
`;

export const SectionType = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 40px;
    width: 300px;
    border-radius: 10px;
    background: #f2f2f2;
`;

export const StatusContainer2 = styled.section`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin-top: 5px;
    height: 250px;
    width: 300px;
    background: #f2f2f2;
    border-radius: 10px;
`;

export const Title = styled.h2`
    margin: 0 auto;
`;

export const Details = styled.li`
    display: flex;
    justify-content: flex-start;
    margin: 10px;
`;
