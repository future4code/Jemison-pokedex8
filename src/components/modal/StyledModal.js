import styled from "styled-components";

export const ModalBG = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
`;

export const ModalContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    height: 200px;
    width: 600px;
    min-width: 300px;
    padding: 40px;
    border: 10px solid #ef5350;
    box-shadow: 0 0 0 10px #fff;
    position: relative;
`;
export const ModalBotao = styled.button`
    position: absolute;
    top: -30px;
    right: -30px;
    width: 50px;
    height: 50px;
    background: #ef5350;
    color: #fff;
    border: 4px solid currentColor;
    border-radius: 50%;
    font-family: monospace;
    font-size: 1.2rem;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.3);
`;
export const ModalContent = styled.div`
    display: grid;
    place-items: center;
    grid-template-columns: 3fr 1fr;

    span {
        text-transform: capitalize;
    }

    img {
        width: 100px;
    }
`;
