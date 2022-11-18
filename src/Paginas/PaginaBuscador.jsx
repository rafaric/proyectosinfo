import { Container } from "@mui/material";

import { useState } from "react";
import Buscador from "../components/Buscador/Buscador";
import Loading from "../components/Loading/Loading";
import Paginador from "../components/Paginador/Paginador";
import { ListaPeliculas } from "../components/Peliculas/Pelicula";
import { getListadoPeliculas } from "../servicios/peliculas";

const PaginaBuscador = () => {
    const [peliculas, setPeliculas] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [cantidadPaginas, setCantidadPaginas] = useState(1);
    const [paginaActual, setPaginaActual] = useState(1);

    const onBuscar = async (criterioBusqueda) => {
        setIsLoading(true)
        const { Search: pelis, totalResults } = await getListadoPeliculas(criterioBusqueda, paginaActual);
        setPeliculas(pelis);
        setCantidadPaginas(Math.ceil(parseInt(totalResults)/10))
        setIsLoading(false);
        console.log(pelis)
    };

    const onCambioPagina = (pagina) => {
        setPaginaActual(pagina)
    };

    return (
        <Container>
            <Buscador onBuscar={onBuscar}/>
            { isLoading && <Loading /> }
            { peliculas && <ListaPeliculas peliculas={peliculas}/> }
            { peliculas && <Paginador cantidadPaginas={cantidadPaginas} onChange={onCambioPagina} /> }
        </Container>
    )
}

export default PaginaBuscador;