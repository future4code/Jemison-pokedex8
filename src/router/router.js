import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Pokedex from "../pages/pokedex";
import Detalhes from "../pages/detalhes";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/pokedex" element={<Pokedex />} />
                <Route path="/detalhes" element={<Detalhes />} />
                <Route path="*" element={"Página não encontrada"} />
            </Routes>
        </BrowserRouter>
    );
}
