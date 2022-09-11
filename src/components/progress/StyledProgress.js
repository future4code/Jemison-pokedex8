import styled from "styled-components";

export const Progress = styled.div`
    margin-top: 10px;
    background: #d8d8d8;
    border-radius: 20px;
    max-width: 100%;
    height: 30px;
`;
export const ProgressDone = styled.div`
    display: flex;
    background: linear-gradient(to left, #ef5350, #ff9472);
    box-shadow: 0 3px 3px -5px #ef5350, 0 2px 5px #ef5350;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: #fff;
    transition: 1s ease;
    font-family: monospace;
    font-size: 14px;
    max-width: 100%;
`;
