const API_KEY = "1780c24f";
const OMDB_API = "https://www.omdbapi.com";

export const getListadoPeliculas = async (criterioBusqueda, paginaActual) => {
  const respuesta = await fetch(
    `${OMDB_API}?apikey=${API_KEY}&t=${criterioBusqueda}`
  );
  const peliculas = await respuesta.json();
  return peliculas;
};

export const getPelicula = async (idPelicula) => {
  const respuesta = await fetch(
    `${OMDB_API}?apikey=${API_KEY}&i=${idPelicula}`
  );
  const pelicula = await respuesta.json();
  return pelicula;
};
