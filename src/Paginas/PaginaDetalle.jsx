import { Container } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "../components/Loading/Loading";
import Pelicula from "../components/Peliculas/Pelicula";
import { getPelicula } from "../servicios/peliculas";
import { useParams } from "react-router-dom";

const PaginaDetalle = () => {
    const [pelicula, setPelicula] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const {id} = useParams()
    useEffect(() => {
        if (id && !pelicula) {
            getPeliculaDelServicio();
        }
    }, [id, pelicula]);

    const getPeliculaDelServicio = async () => {
        setIsLoading(true)
        const peli = await getPelicula(id);
        setPelicula(peli);
        setIsLoading(false)
    };


    if ((pelicula && pelicula.Error) || !pelicula) {
        return (
            <Container maxWidth='sm'>
                La pelicula no se encontro {id}
            </Container>
        )
    }

    if(isLoading && !pelicula) {
        return <Loading />
    }

    return (
        <Container maxWidth='sm'>
            <Pelicula pelicula={pelicula}/>
        </Container>
    )
}

export default PaginaDetalle;