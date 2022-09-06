import styled from "styled-components";

// Estilização da página de descrição do pokemon

export const Titulo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    font-weight: normal;
    text-transform: capitalize;
    padding: 40px 20px;

    span::before {
        content: "Nº ";
    }
`;

export const ContainerDetalhes = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    max-width: 1200px;
    margin: 0 auto;

    h2 {
        margin-bottom: 20px;
    }

    li {
        font-size: 1.125rem;
        line-height: 3;

        span {
            font-weight: 500;
        }
    }
`;

export const Contents = styled.div`
    display: grid;
    gap: 40px;

    &:first-child {
        background: blue;
    }
`;

export const DetailsContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 20px;
    background: #f2f2f2;
    border-radius: 10px;

    &:nth-child(1) {
        display: flex;
    }
`;

export const TypesContent = styled.ul`
    display: flex;
    gap: 40px;
    padding: 20px;
    background: #f2f2f2;
    border-radius: 10px;
`;

export const ImagensPokemon = styled.div``;

export const ImagemPokemon = styled.div`
    display: flex;
    justify-content: center;
    background: #f2f2f2;
    height: 290px;
    border-radius: 10px;

    &:first-child {
        margin-bottom: 40px;
    }
`;

export const BaseDeStatus = styled.ul``;

export const Habilidades = styled.ul``;
export const Evolucoes = styled.ul``;
