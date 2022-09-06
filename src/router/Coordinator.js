export const goToHomePage = (navigate) => {
    navigate("/");
};

export const goToPokedexPage = (navigate) => {
    navigate("/pokedex");
};

export const goToDetailPage = (navigate, id) => {
    navigate(`/detalhes/${id}`);
};

export const goToBack = (navigate) => {
    navigate(-1);
};
