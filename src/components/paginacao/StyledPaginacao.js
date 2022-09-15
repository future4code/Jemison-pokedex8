import styled from "styled-components";

export const Paginas = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: center;
    gap: 10px;
    font-size: 1.125rem;
    color: #ef5350;
    margin: 40px 20px;

    p {
        &:first-child {
            position: relative;

            &::before {
                display: inline-block;
                content: "1170 pokémons";
                position: absolute;
                top: -20px;
                left: -150px;
                height: max-content;
                width: max-content;

                @media screen and (max-width: 600px) {
                    display: none;
                }
            }
        }
    }

    button {
        background: none;
        border: none;
        color: inherit;
        font-size: inherit;
    }
`;
