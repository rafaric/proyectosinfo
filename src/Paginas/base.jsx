import Weather from '../components/weather/weather'
import './base.css'
import NavList from './navegacion';
import { useState, useEffect } from 'react'
import { getWeather } from '../servicios/weather';
// import WeatherMainInfo from '../components/weather/WeatherMainInfo';
import Loading from '../components/Loading/Loading';
import Newweathermain from '../components/weather/Newweathermain';

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
            
            <h1>
                <img className='avatar' src='https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Prescription02&hairColor=BrownDark&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=BlazerShirt&eyeType=Happy&eyebrowType=Default&mouthType=Default&skinColor=Light'
                    alt='avatar'
                    width='200px'
                    height='200px'
                />
                BIENVENIDOS A MI PORTFOLIO
            </h1>
            
            <p className='desc'>Soy Rafael Strongoli y estoy empezando a dar mis primeros pasos como desarrollador FrontEnd. Te invito a que recorras este espacio y pruebes alguno de los proyectos en los que estuve trabajando.
            </p>

            {/* Widget-Linkedin */}
            <div className='contenedor'>
                <div 
                    className="badge-base LI-profile-badge" 
                    data-locale="es_ES" 
                    data-size="medium" 
                    data-theme="light" 
                    data-type="VERTICAL" 
                    data-vanity="rafael-strongoli" 
                    data-version="v1">
                    <a 
                        className="badge-base__link LI-simple-link" 
                        href="https://ar.linkedin.com/in/rafael-strongoli?trk=profile-badge" 
                        rel="noreferrer" 
                        target='_blank'>
                        Rafael Strongoli
                    </a>
                </div>
        {/* Widget del Clima */}
        <div className="weatherContainer">
        
            <Weather  onChangeCiudad={handleChangeCity}/>
            
            {clima ? <Newweathermain clima={clima}/> : <Loading className='loader'/>}
        
        </div>

        </div>
            
        </>
    );
    
}

export default Base