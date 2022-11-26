import React from 'react';
import './WeatherMainInfo.css';
const WeatherMainInfo = ({clima}) => {
    
    return (
        <div className='mainInfo'>
            <div className='city'>{clima?.name}</div>
            <div className='row'>
                <div >
                    <img src={`http://openweathermap.org/img/wn/${clima?.weather[0].icon}@2x.png`} alt='icono'/>                    
                </div>
                <div className='weatherConditions'>
                    <div className='condition'>{clima?.weather[0].description}</div>
                    <div className='current'>{clima?.main.temp} ºC</div>
                </div>
            </div>
            
                <iframe 
                    src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d56647.25776835287!2d${clima?.coord.lon}!3d${clima?.coord.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1669428080886!5m2!1ses-419!2sar`} 
                    width="100%" 
                    height="450" 
                    style={{"border":0}} 
                    allowfullscreen="" 
                    loading="lazy" 
                    title='mapa'
                    referrerpolicy="no-referrer-when-downgrade">
                    
                </iframe>
               
        </div>
    );
}

export default WeatherMainInfo;
