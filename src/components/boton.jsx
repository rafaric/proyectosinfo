import React from 'react';
import './boton.css'
import Button from 'react-bootstrap/Button';



const Boton = (props) => {
    

    return (
        <div>
            <Button variant="secondary" className="btn-listar" onClick={props.recarga}> {props.texto ? "Ocultar" : "Listar"} </Button>
        </div>
    );
}



export default Boton;
