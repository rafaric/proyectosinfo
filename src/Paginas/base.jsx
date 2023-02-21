import Weather from "../components/weather/weather";
import "./base.css";
import NavList from "./navegacion";
import { useState, useEffect } from "react";
import { getWeather } from "../servicios/weather";
// import WeatherMainInfo from '../components/weather/WeatherMainInfo';
import Loading from "../components/Loading/Loading";
import Newweathermain from "../components/weather/Newweathermain";
import boot from "../img/tecnologias/bootstrap.png";
import html5 from "../img/tecnologias/html-5-logotype.png";
import ccs3 from "../img/tecnologias/css-3.png";
import django from "../img/tecnologias/django.png";
import js from "../img/tecnologias/java-script-logo.png";
import sql from "../img/tecnologias/mysql.png";
import next from "../img/tecnologias/next-js_1.svg";
import post from "../img/tecnologias/postgre.png";
import python from "../img/tecnologias/python.png";
import rea from "../img/tecnologias/react-logo.png";
import { Tooltip } from "react-tooltip";

function Base(props) {
  const [clima, setClima] = useState(null);

  useEffect(() => {
    loadingInfo();
  }, []);

  async function loadingInfo(ciudad = "Resistencia") {
    try {
      const respuesta = await getWeather(ciudad);
      setClima(respuesta);
    } catch (error) {
      console.log(error);
    }
  }

  function handleChangeCity(ciudad) {
    setClima(null);
    loadingInfo(ciudad);
  }
  function showTecno() {
    const tecno = document.getElementsByClassName("proyectos__card-tecno-img");
    console.log(tecno);
    tecno.classList.toggle("visible");
  }
  return (
    <>
      <NavList />
      <main className="header">
        <h1>
          <img
            className="avatar"
            src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Prescription02&hairColor=BrownDark&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=BlazerShirt&eyeType=Happy&eyebrowType=Default&mouthType=Default&skinColor=Light"
            alt="avatar"
            width="200px"
            height="200px"
          />
          BIENVENIDOS A MI PORTFOLIO
        </h1>

        <p className="desc">
          Soy Rafael Strongoli y estoy empezando a dar mis primeros pasos como
          desarrollador FrontEnd. Te invito a que recorras este espacio y
          pruebes alguno de los proyectos en los que estuve trabajando.
        </p>
        <a href="#" className="contacto">
          Contacto
        </a>
      </main>

      {/* Widget-Linkedin */}
      {/* <div className='contenedor'>
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
                </div> */}
      {/* Widget del Clima */}
      {/* <div className="weatherContainer">
        
            <Weather  onChangeCiudad={handleChangeCity}/>
            
            {clima ? <Newweathermain clima={clima}/> : <Loading className='loader'/>}
        
        </div> */}
      <section className="tecnologias--section">
        <h2 className="tecnologias--titulo">TECNOLOGÍAS</h2>
        <div className="tecnologias">
          <div
            className="tecnologia"
            data-tooltip-id="html"
            data-tooltip-content="HTML5"
          >
            <img src={html5} alt="" className="tecno-img" />
          </div>
          <div
            className="tecnologia"
            data-tooltip-id="ccs3"
            data-tooltip-content="CCS3"
          >
            <img src={ccs3} alt="" className="tecno-img" />
          </div>
          <div
            className="tecnologia"
            data-tooltip-id="Bootstrap"
            data-tooltip-content="Bootstrap"
          >
            <img src={boot} alt="" className="tecno-img" />
          </div>
          <div
            className="tecnologia"
            data-tooltip-id="Javascript"
            data-tooltip-content="Javascript"
          >
            <img src={js} alt="" className="tecno-img" />
          </div>
          <div
            className="tecnologia"
            data-tooltip-id="react"
            data-tooltip-content="React"
          >
            <img src={rea} alt="" className="tecno-img" />
          </div>
          <div
            className="tecnologia"
            data-tooltip-id="next"
            data-tooltip-content="NextJs"
          >
            <img src={next} alt="" className="tecno-img" />
          </div>
          <div
            className="tecnologia"
            data-tooltip-id="sql"
            data-tooltip-content="MySql"
          >
            <img src={sql} alt="" className="tecno-img" />
          </div>
          <div
            className="tecnologia"
            data-tooltip-id="post"
            data-tooltip-content="Postgress"
          >
            <img src={post} alt="" className="tecno-img" />
          </div>
          <div
            className="tecnologia"
            data-tooltip-id="python"
            data-tooltip-content="Python"
          >
            <img src={python} alt="" className="tecno-img" />
          </div>
          <div
            className="tecnologia"
            data-tooltip-id="django"
            data-tooltip-content="Django"
          >
            <img src={django} alt="" className="tecno-img" />
          </div>
        </div>
        <Tooltip id="html" />
        <Tooltip id="ccs3" />
        <Tooltip id="Bootstrap" />
        <Tooltip id="Javascript" />
        <Tooltip id="react" />
        <Tooltip id="next" />
        <Tooltip id="sql" />
        <Tooltip id="post" />
        <Tooltip id="python" />
        <Tooltip id="django" />
      </section>
      <section className="about">
        <div className="about--container">
          <h2 className="about--titulo">Acerca de mí</h2>
          <p className="about-contenido">
            Tengo 42 años, soy de Resistencia, Chaco, Argentina. Mi pasión por
            la programación empezó hace mucho, con el legendario GwBasic!
            Actualmente, soy un autodidacta a tiempo completo. Busco tutoriales,
            tips, desafíos, cursos y todo aquello que me permita seguir
            completando mi conocimiento sobre este apasionante mundo de la
            programación, en especial el FrontEnd. Quiero emprender nuevos
            desafíos, compartir mis conocimientos y hacer que cualquier proyecto
            en el que me hagan partícipe, resalte.
          </p>
        </div>
      </section>
      <section>
        <h2>Soft Skills</h2>
      </section>
      <section className="otros-proyectos">
        <h2>Otros Proyectos</h2>
        <div className="proyectos__card-container">
          <div className="proyectos__card">
            <img
              className="proyectos__card-img"
              src="images/Screenshot.png"
              alt="frutayfruto"
              onMouseEnter={showTecno}
            />
            <img src={html5} alt="" className="proyectos__card-tecno-img" />
          </div>
        </div>
      </section>
      <section className="educacion">
        <h2>Cursos y certificados</h2>
      </section>
    </>
  );
}

export default Base;
