import React from "react";
import {
    ModalBG,
    ModalContainer,
    ModalBotao,
    ModalContent,
} from "./StyledModal";

export const Modal = ({ id = "modal", onClose = () => {}, children }) => {
    const handleOutsideClick = (e) => {
        if (e.target.id === id) {
            onClose();
        }
    };

    return (
        <ModalBG id={id} onClick={handleOutsideClick}>
            <ModalContainer>
                <ModalBotao onClick={onClose}>x</ModalBotao>
                <ModalContent>{children}</ModalContent>
            </ModalContainer>
        </ModalBG>
    );
};
