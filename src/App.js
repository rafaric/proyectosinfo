import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import PaginaSuperHeroes from "./Paginas/PaginaSuperHeroes";
import Productos from "./Paginas/Productos";
import PaginaBuscador from "./Paginas/PaginaBuscador";
import Todo from "./Paginas/todo";
import PaginaDetalle from "./Paginas/PaginaDetalle";
import Encriptador from "./Paginas/encriptador";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PaginaSuperHeroes />,
  },
  {
    path: "/productos",
    element: <Productos />,
  },
  {
    path: "/todo",
    element: <Todo />,
  },
  {
    path: "/buscador",
    element: <PaginaBuscador />,
  },
  {
    path: "/buscador/:id",
    element: <PaginaDetalle />,
  },
  {
    path: "/encriptador",
    element: <Encriptador />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
