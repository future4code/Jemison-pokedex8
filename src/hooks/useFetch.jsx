import { useEffect, useState } from "react";
import axios from "axios";

//Hook personalizado para buscar dados de qualquer API

export function useFetch(url) {
    const [data, setData] = useState([]);
    const [erro, setErro] = useState([]);

    useEffect(() => {
        axios
            .get(url)
            .then((response) => setData(response.data))
            .catch((error) => {
                setErro(error);
                console.log(error);
            });
    }, [url]);

    return { data, erro };
}
