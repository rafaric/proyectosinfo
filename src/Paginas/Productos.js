import "./Productos.css";
import Boton from "../components/boton";
import TarjetaDeProductos from "../components/informacionProductos/tarjetaDeProductos";
import Titular from "./titulo";
import { useState } from "react";
import NavList from "./navegacion";

function Productos() {
  const obtenerProductos = async () => {
    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    );
    const data = await response.json();
    setproductos(data);
  };

  const [productos, setproductos] = useState(obtenerProductos);
  const [mostrar, setMostrar] = useState(false);

  const show = () => {
    setMostrar((mostrar) => !mostrar);
  };

  return (
    <div className="Hola">
      <NavList />
      <header>
        <Titular />
      </header>
      <main className="main">
        <Boton recarga={show} texto={mostrar} />

        <div className="Productos">
          <TarjetaDeProductos mostrar={mostrar} productos={productos} />
        </div>
      </main>
    </div>
  );
}

export default Productos;
