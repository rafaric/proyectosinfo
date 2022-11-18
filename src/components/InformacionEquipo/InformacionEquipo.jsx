import './InformacionEquipo.css'

const InformacionEquipo = ({
    // puedo usar props y hacer props.parametro ó
    ciudad,
    anioFormacion,
    baseSecreta
}) => {
    return (
        <section className='informacion-equipo'>
            <ul>
                <li> Ciudad: {ciudad}</li>
                <li> Base Secreta: {baseSecreta}</li>
                <li> Año de Formacion: {anioFormacion}</li>
            </ul>
        </section>
    ); 
}

export default InformacionEquipo;
