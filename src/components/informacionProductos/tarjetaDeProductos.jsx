import React from 'react';

/*import ImagenDeProducto from './imagenDeProducto';*/
import InformacionProducto from './informacionProducto';
import './tarjetaDeProductos.css'

const TarjetaDeProductos = (
    props
    ) => {
        console.log(props.mostrar);
    if (props.productos.length > 0 && props.mostrar === true){
        return props.productos.map(elemento => {
            return <InformacionProducto
                        
                        key={elemento.name}
                        name={elemento.name}
                        price={elemento.price}

                    />
        }); 
    } else{
        return <div>Presione Listar para acceder a los productos...</div>
    }
}

export default TarjetaDeProductos;
