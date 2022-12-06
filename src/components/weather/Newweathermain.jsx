import React from 'react';
import { useState } from 'react';
import './Newweathermain.css';

const Newweathermain = ({clima}) => {
  const [expanded, setExpanded] = useState(false);
  console.log(expanded);

  return (
    <div className={expanded ? "profile profile--expanded" : "profile"} onClick={()=>{setExpanded(!expanded)}}>
      <div className="profile__banner"></div>
      <div>
        <div className="profile__pic">
            <img src={`http://openweathermap.org/img/wn/${clima?.weather[0].icon}@2x.png`} alt="Profile of Cho Miyeon" />
        </div>
        <div className="profile__info">
            <span className="profile__info-display">{clima?.name}</span>
            <span className="profile__info-username">{clima?.weather[0].description}</span>
        </div>
      </div>
      <div className="profile__data">
        <span className="profile__data-following">
            <span className="profile__data-following-number">{clima?.main.temp} ºC</span>
            <span className="profile__data-following-label">Temperatura Actual</span>
        </span>
        <span className="profile__data-followers">
            <span className="profile__data-followers-number">{clima?.main.feels_like} ºC</span>
            <span className="profile__data-following-label">Sensación</span>
        </span>
        <span className="profile__data-likes">
            <span className="profile__data-likes-number">{clima?.main.humidity} %</span>
            <span className="profile__data-likes-label">Humedad</span>
        </span>
      </div>
    </div>
  );
}

export default Newweathermain;
