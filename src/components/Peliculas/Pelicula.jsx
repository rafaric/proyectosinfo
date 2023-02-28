import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { DEFAULT_IMAGE, NA } from "../../libs/constantes";
import { useNavigate } from "react-router-dom";

const Pelicula = ({ pelicula, onChange }) => {
  console.log(pelicula);
  const onCardClick = () => {
    onChange && onChange(pelicula);
  };

  return (
    <Card sx={{ width: "45%", height: "500px" }}>
      <CardActionArea onClick={onCardClick}>
        <CardMedia
          component="img"
          sx={{ objectFit: "fill", height: "auto" }}
          image={pelicula.Poster === NA ? DEFAULT_IMAGE : pelicula.Poster}
          alt={pelicula.Title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {pelicula.Title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {pelicula.Plot}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {pelicula.Actors}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export const ListaPeliculas = ({ peliculas }) => {
  const navigate = useNavigate();
  const onPeliculaClick = ({ imdbID }) => {
    navigate(`/buscador/${imdbID}`);
  };
  return (
    <section
      style={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        gap: "10px",
        marginTop: "20px",
        justifyContent: "center",
        width: "90vw",
      }}
    >
      {peliculas.map((pelicula) => {
        return <Pelicula pelicula={pelicula} onChange={onPeliculaClick} />;
      })}
    </section>
  );
};
export default Pelicula;
