import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import Base from './Paginas/base'
import 'bootstrap/dist/css/bootstrap.min.css';
import PaginaSuperHeroes from "./Paginas/PaginaSuperHeroes";
import Productos from './Paginas/Productos'
import PaginaBuscador from './Paginas/PaginaBuscador'

const router = createBrowserRouter([
  {
      path: "/",
      element: <Base texto='Veremos'/>,
  },
  {
    path: "/superheroes",
    element: <PaginaSuperHeroes />,
  },
  {
    path: "/productos",
    element: <Productos />,
  },
  {
    path: "/buscador",
    element: <PaginaBuscador />,
  }
  ]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
