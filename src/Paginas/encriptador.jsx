import React from 'react'
import encriptador from "../img/Encriptador.png"
import NavList from './navegacion'
import "./encriptador.css"

function Encriptador() {
  return (
    <>
        <NavList />
        <div className="contenedor-pagina">
            
        <a  href='https://rafaric.github.io/encriptador-allura/' target="_blank"><img className='encriptador-imagen' src={encriptador} alt="" /></a>
        <div className='contenedor-pagina-descripcion'>

        <p>Encriptador de texto realizado con HTML, CSS y Javascript. Realizado en el curso de Allura Latam. Se siguió los patrones de diseño propuestos por la catedra.
            Para visitar el sitio, haga clic en la imagen.
        </p>
        </div>
        </div>
    </>
  )
}

export default Encriptador