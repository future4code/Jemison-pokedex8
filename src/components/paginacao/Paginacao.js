import React from "react";
import { Paginas } from "./StyledPaginacao";

export const Paginacao = (props) => {
    const { pagina, totalPaginas, onLeftClick, onRightClick } = props;

    return (
        <Paginas>
            <p></p>
            <button onClick={onLeftClick}>◀</button>
            <p>
                {pagina} de {totalPaginas}
            </p>
            <button onClick={onRightClick}>▶</button>
        </Paginas>
    );
};
