import Weather from '../components/weather/weather'
import './base.css'
import NavList from './navegacion';
import { useState, useEffect } from 'react'
import { getWeather } from '../servicios/weather';

function Base(props) {
    const [clima, setClima] = useState(null);
    
    useEffect(() => {
        loadingInfo();
        
    }, []);

    async function loadingInfo(ciudad='Cordoba') {
        console.log('estoy ak');
        try {
            const respuesta = await getWeather(ciudad);
            console.log(respuesta.data[0].app_temp);
            setClima(respuesta);
        } catch (error) {
            console.log(error)
        }
    }

    function handleChangeCity(ciudad) {
        
        setClima(null);
        loadingInfo(ciudad);
    }

    return(
        <>
            <NavList />
            <h1>BIENVENIDOS A MI PORTFOLIO</h1>
            <Weather onChangeCiudad={handleChangeCity}/>
            <div>{clima?.data[0].app_temp}</div>
        </>
    );
    
}

export default Base