import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Pokedex from "../pages/Pokedex";
import { Detalhes } from "../pages/Detalhes";

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/pokedex" element={<Pokedex />} />
                <Route path="/detalhes/:id" element={<Detalhes />} />
                <Route path="*" element={"Página não encontrada"} />
            </Routes>
        </BrowserRouter>
    );
}
