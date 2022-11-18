import React from 'react';
import ImagenDeProducto from './imagenDeProducto';
import './informacionProducto.css'
const InformacionProducto = ({
        name,
        price
}) => {
    
    return (
            <article className="card">
                <ul>
                    <ImagenDeProducto />
                    <li> <span className="bold">Nombre: </span>{name}</li>
                    <li> <span className="bold">Precio: </span>{price}</li>
                </ul>
            </article>
    )};

export default InformacionProducto;
