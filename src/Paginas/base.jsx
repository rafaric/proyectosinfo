import Weather from '../components/weather/weather'
import './base.css'
import NavList from './navegacion';
import { useState, useEffect } from 'react'
import { getWeather } from '../servicios/weather';
import WeatherMainInfo from '../components/weather/WeatherMainInfo';
import Loading from '../components/Loading/Loading';

function Base(props) {
    const [clima, setClima] = useState(null);
    
    useEffect(() => {
        loadingInfo();
        
    }, []);

    async function loadingInfo(ciudad='Resistencia') {
        try {
            const respuesta = await getWeather(ciudad);
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
            <div>
                <div className="badge-base LI-profile-badge" data-locale="es_ES" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="rafael-strongoli" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://ar.linkedin.com/in/rafael-strongoli?trk=profile-badge">Rafael Strongoli</a>
                </div>
            </div>
            <div className='weatherContainer'>
                
                <Weather onChangeCiudad={handleChangeCity}/>
                {clima ? <WeatherMainInfo clima={clima}/> : <Loading className='loader'/>}
                
            </div>
        </>
    );
    
}

export default Base