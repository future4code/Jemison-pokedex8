import React from "react";
import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button,
} from "./EstiloPokeCard";
import { useNavigate } from "react-router-dom";
import { goToDetailPage } from "../../router/coordinator";
import { useContext } from "react";
import {ContextPokedex} from "../../ContextPokedex/ContexPokedex"

export default function PokeCard() {
    const navigate = useNavigate();
    const {inforPokemons, capturarPokemon} = useContext(ContextPokedex);

    return (
        <Card>
            <CardActionArea>
                <CardMedia src="/colocarimagem" alt="Imagem do Pokemon" />

                <CardContent>
                   {inforPokemons.map((pokemom) =>(
                    <>
                        <p>{pokemom.name}</p>
                        <img src={pokemom[`sprites`][`other`][`official-artwork`][`front_default`]}
                        />

                        <CardActions>
                            <Button onClick={()=>capturarPokemon(pokemom)}>Adicionar</Button>
                            <Button onClick={() => goToDetailPage(navigate)}>
                                Ver detalhes
                            </Button>
                        </CardActions>
                    </>
                   ))}
                   
                    <Typography variant="body2" color="text.secondary">
                        
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
