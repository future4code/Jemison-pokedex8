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

export default function PokeCard({ name }) {
    const navigate = useNavigate();

    return (
        <Card>
            <CardActionArea>
                <CardMedia src="/colocarimagem" alt="Imagem do Pokemon" />

                <CardContent>
                    <h2>{name}</h2>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Provident tenetur voluptas rem, nobis minus, eaque
                        consequatur accusantium iste beatae fuga unde sed
                        similique? Obcaecati expedita laboriosam quasi ipsum
                        alias soluta.
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
