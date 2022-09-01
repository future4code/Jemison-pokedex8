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

export default function PokeCard({ name }) {
    const navigate = useNavigate();
    const {inforPokemons} = useContext(ContextPokedex);

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
                    </>
                   ))}
                   
                    <Typography variant="body2" color="text.secondary">
                        
                    </Typography>
                </CardContent>
            </CardActionArea>

            <CardActions>
                <Button>Adicionar</Button>
                <Button onClick={() => goToDetailPage(navigate)}>
                    Ver detalhes
                </Button>
            </CardActions>
        </Card>
    );
}
