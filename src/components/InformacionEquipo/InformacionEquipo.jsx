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
                <li><strong>Ciudad: </strong> {ciudad}</li>
                <li><strong>Base Secreta: </strong>  {baseSecreta}</li>
                <li><strong>Año de Formación: </strong>  {anioFormacion}</li>
            </ul>
        </section>
    ); 
}

export default InformacionEquipo;
