import React from "react";
import { PokedexProvider } from "./providers/PokedexProvider";
import { GlobalStyles } from "./styled";
import { Router } from "../src/router/Router";

export default function App() {
    return (
        <PokedexProvider>
            <Router />
            <GlobalStyles />
        </PokedexProvider>
    );
}
