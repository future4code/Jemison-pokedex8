import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

a {
    display: block;
    text-decoration: none;
}

img {
    display: block;
    max-width: 100%;
}
`;
