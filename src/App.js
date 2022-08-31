import React from "react";
import Router from "./router/router";
import { GlobalStyles } from "./styled";

export default function App() {
    return (
        <div>
            <Router />
            <GlobalStyles />
        </div>
    );
}
