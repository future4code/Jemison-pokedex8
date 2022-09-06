import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

ul,li {
    list-style: none;
}

a {
    display: block;
    text-decoration: none;
    transition: .3s;
}

img {
    display: block;
    max-width: 100%;
}

button {
    display: inline-block;
    cursor: pointer;
}


`;

// HOME
export const Tela = styled.div``;
export const Body = styled.body``;
