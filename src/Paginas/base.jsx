import "./base.css";
import NavList from "./navegacion";
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
  function showTecno() {
    const tecno = document.getElementsByClassName("proyectos__card-tecno-img");
    console.log(tecno);
    tecno.classList.toggle("visible");
  }
  return (
    <>
      <NavList />
      <header className="header">
        <img
          className="avatar"
          src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Prescription02&hairColor=BrownDark&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=BlazerShirt&eyeType=Happy&eyebrowType=Default&mouthType=Default&skinColor=Light"
          alt="avatar"
          width="200px"
          height="200px"
        />
        <div className="subheader">
          <h1>RAFAEL STRONGOLI</h1>
          <div className="desc">
            <p>Desarrollador FrontEnd.</p>
            <p>
              Te invito a que recorras este espacio y pruebes alguno de los
              proyectos en los que trabajé.
            </p>
          </div>
          <a href="mailto:rafaelstrongoli@gmail.com" className="bn39">
            <span className="bn39span">Contacto</span>
          </a>
        </div>
      </header>

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
            Tengo 42 años, soy de Resistencia, Chaco, Argentina. Empecé con la
            programación hace mucho, con el legendario GwBasic! Actualmente, soy
            un autodidacta a tiempo completo. Uso tutoriales, tips, desafíos,
            cursos y todo aquello que me permita seguir completando mi
            conocimiento sobre este desafiante mundo de la programación, en
            especial el FrontEnd. Quiero emprender nuevos desafíos, compartir
            mis conocimientos y hacer que cualquier proyecto en el que me hagan
            partícipe, resalte.
          </p>
        </div>
      </section>
      <section className="softSkills">
        <h2>Soft Skills</h2>
        <div>
          <h3>SoftSkills</h3>
        </div>
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
            <div className="proyectos__card-tecno-img">
              <img src={html5} alt="html5" className="tecno-img" />
              <img src={ccs3} alt="ccs3" className="tecno-img" />
            </div>
          </div>
          <div className="proyectos__card">
            <img
              className="proyectos__card-img"
              src="images/SocialArmy.png"
              alt="SocialArmy"
              onMouseEnter={showTecno}
            />
            <div className="proyectos__card-tecno-img">
              <img src={html5} alt="html5" className="tecno-img" />
              <img src={ccs3} alt="ccs3" className="tecno-img" />
              <img src={rea} alt="react" className="tecno-img" />
              <img src={next} alt="next" className="tecno-img" />
            </div>
          </div>
          <div className="proyectos__card">
            <img
              className="proyectos__card-img"
              src="images/weather.png"
              alt="clima"
              onMouseEnter={showTecno}
            />
            <div className="proyectos__card-tecno-img">
              <img src={html5} alt="html5" className="tecno-img" />
              <img src={ccs3} alt="ccs3" className="tecno-img" />
              <img src={rea} alt="react" className="tecno-img" />
            </div>
          </div>
        </div>
      </section>
      <section className="educacion">
        <h2 className="text-center py-5">Cursos y certificados</h2>
        <div className="educacion-container">
          <div className="card-educacion">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 550 150"
              height="15em"
              width="20em"
              alt="OpenBootcamp Logo"
              role="img"
              class="openclass plasmic-default__svg plasmic_open_bootcamp_v_2_0_all__6KPZb PlasmicLogo_svg__DNShe"
            >
              <path
                d="M190.101 60.606c-5.309 0-10.107-1.143-14.393-3.43-4.237-2.286-7.573-5.423-10.009-9.412-2.386-4.038-3.579-8.562-3.579-13.573 0-5.01 1.193-9.51 3.579-13.499 2.436-4.037 5.772-7.2 10.009-9.486 4.286-2.286 9.084-3.43 14.393-3.43 5.309 0 10.082 1.144 14.319 3.43 4.238 2.287 7.574 5.449 10.009 9.486 2.435 3.99 3.653 8.489 3.653 13.5 0 5.01-1.218 9.534-3.653 13.572-2.435 3.989-5.771 7.126-10.009 9.413-4.237 2.286-9.01 3.43-14.319 3.43zm0-10.07c3.02 0 5.747-.68 8.182-2.043 2.436-1.41 4.335-3.356 5.699-5.837 1.412-2.481 2.119-5.303 2.119-8.465s-.707-5.983-2.119-8.464c-1.364-2.48-3.263-4.402-5.699-5.764-2.435-1.411-5.162-2.117-8.182-2.117-3.02 0-5.747.706-8.183 2.117-2.435 1.362-4.359 3.283-5.771 5.764-1.364 2.481-2.046 5.302-2.046 8.464 0 3.162.682 5.984 2.046 8.465 1.412 2.48 3.336 4.427 5.771 5.837 2.436 1.362 5.163 2.043 8.183 2.043zm57.843-30.646c3.653 0 6.965.85 9.936 2.553 3.02 1.654 5.382 4.014 7.087 7.078 1.705 3.017 2.557 6.543 2.557 10.581 0 4.038-.852 7.589-2.557 10.653-1.705 3.017-4.067 5.376-7.087 7.078-2.971 1.654-6.283 2.481-9.936 2.481-5.016 0-8.961-1.58-11.835-4.743v18.316l-11.397-3.005V20.473h10.886v4.524c2.825-3.405 6.94-5.107 12.346-5.107zm-1.972 31.084c2.922 0 5.309-.973 7.16-2.918 1.899-1.995 2.849-4.646 2.849-7.954s-.95-5.935-2.849-7.88c-1.851-1.995-4.238-2.992-7.16-2.992-2.922 0-5.333.997-7.233 2.991-1.851 1.946-2.776 4.573-2.776 7.881s.925 5.96 2.776 7.954c1.9 1.945 4.311 2.918 7.233 2.918zm66.222-10.726c0 .146-.073 1.167-.219 3.065H282.24c.536 2.432 1.802 4.353 3.799 5.764 1.997 1.41 4.481 2.116 7.452 2.116 2.046 0 3.848-.292 5.406-.875 1.608-.633 3.093-1.606 4.457-2.92l6.064 6.568c-3.702 4.232-9.108 6.348-16.219 6.348-4.432 0-8.353-.85-11.763-2.554-3.409-1.75-6.039-4.159-7.89-7.224-1.851-3.064-2.776-6.542-2.776-10.434 0-3.843.901-7.297 2.703-10.362 1.851-3.113 4.359-5.52 7.525-7.223 3.215-1.752 6.794-2.627 10.74-2.627 3.847 0 7.33.827 10.447 2.48 3.117 1.654 5.552 4.038 7.306 7.151 1.802 3.065 2.703 6.64 2.703 10.727zM291.811 28.5c-2.582 0-4.749.73-6.503 2.189-1.753 1.46-2.824 3.454-3.214 5.983h19.36c-.389-2.48-1.461-4.45-3.214-5.91-1.754-1.508-3.897-2.262-6.429-2.262zm50.399-8.61c4.871 0 8.792 1.459 11.763 4.378 3.019 2.918 4.529 7.248 4.529 12.988v22.475h-11.397V39.007c0-3.113-.682-5.424-2.045-6.932-1.364-1.556-3.337-2.335-5.918-2.335-2.874 0-5.163.9-6.868 2.7-1.704 1.752-2.557 4.378-2.557 7.88v19.41H318.32V20.474h10.886v4.597c1.51-1.654 3.385-2.918 5.625-3.794 2.241-.924 4.701-1.386 7.379-1.386zm-136.806 83.385c2.946.985 5.254 2.645 6.924 4.979 1.67 2.281 2.504 5.108 2.504 8.479 0 4.771-1.768 8.453-5.303 11.046-3.487 2.541-8.593 3.812-15.321 3.812h-26.664V77.138h25.191c6.285 0 11.098 1.27 14.437 3.811 3.388 2.541 5.082 5.99 5.082 10.347 0 2.644-.614 5.004-1.841 7.078-1.179 2.075-2.848 3.708-5.009 4.901zm-26.001-16.647v12.835h11.859c2.946 0 5.18-.544 6.703-1.633 1.522-1.09 2.283-2.697 2.283-4.823 0-2.126-.761-3.708-2.283-4.745-1.523-1.09-3.757-1.634-6.703-1.634h-11.859zm13.921 35.472c3.143 0 5.5-.544 7.071-1.633 1.621-1.089 2.431-2.775 2.431-5.057 0-4.511-3.167-6.767-9.502-6.767h-13.921V122.1h13.921zm47.115 10.113c-4.174 0-7.93-.908-11.269-2.723-3.29-1.867-5.868-4.434-7.734-7.701-1.866-3.267-2.799-6.975-2.799-11.124 0-4.149.933-7.857 2.799-11.124 1.866-3.267 4.444-5.808 7.734-7.623 3.339-1.867 7.095-2.8 11.269-2.8s7.906.933 11.196 2.8c3.29 1.815 5.868 4.356 7.734 7.623 1.866 3.267 2.799 6.975 2.799 11.124 0 4.149-.933 7.857-2.799 11.124-1.866 3.267-4.444 5.834-7.734 7.701-3.29 1.815-7.022 2.723-11.196 2.723zm0-9.957c2.947 0 5.353-1.037 7.219-3.112 1.915-2.126 2.872-4.952 2.872-8.479 0-3.526-.957-6.327-2.872-8.401-1.866-2.126-4.272-3.19-7.219-3.19-2.946 0-5.377 1.064-7.292 3.19-1.915 2.074-2.872 4.875-2.872 8.401 0 3.527.957 6.353 2.872 8.479 1.915 2.075 4.346 3.112 7.292 3.112zm46.793 9.957c-4.174 0-7.93-.908-11.269-2.723-3.29-1.867-5.868-4.434-7.734-7.701-1.866-3.267-2.799-6.975-2.799-11.124 0-4.149.933-7.857 2.799-11.124 1.866-3.267 4.444-5.808 7.734-7.623 3.339-1.867 7.095-2.8 11.269-2.8s7.906.933 11.196 2.8c3.29 1.815 5.868 4.356 7.734 7.623 1.866 3.267 2.799 6.975 2.799 11.124 0 4.149-.933 7.857-2.799 11.124-1.866 3.267-4.444 5.834-7.734 7.701-3.29 1.815-7.022 2.723-11.196 2.723zm0-9.957c2.947 0 5.353-1.037 7.219-3.112 1.915-2.126 2.872-4.952 2.872-8.479 0-3.526-.957-6.327-2.872-8.401-1.866-2.126-4.272-3.19-7.219-3.19-2.946 0-5.377 1.064-7.292 3.19-1.915 2.074-2.873 4.875-2.873 8.401 0 3.527.958 6.353 2.873 8.479 1.915 2.075 4.346 3.112 7.292 3.112zm53.496 7.312c-1.129.882-2.529 1.556-4.198 2.023-1.621.415-3.34.622-5.157.622-4.714 0-8.372-1.271-10.975-3.812-2.553-2.541-3.83-6.275-3.83-11.202v-17.191h-6.113v-9.335h6.113V77.138l11.491 3.345v10.19h9.87v9.335h-9.87v17.036c0 1.763.417 3.137 1.252 4.123.884.933 2.112 1.4 3.683 1.4 1.817 0 3.364-.519 4.64-1.556l3.094 8.557zm22.905 2.645c-4.223 0-8.028-.908-11.417-2.723-3.339-1.867-5.966-4.434-7.881-7.701-1.866-3.267-2.799-6.975-2.799-11.124 0-4.149.933-7.857 2.799-11.124 1.915-3.267 4.542-5.808 7.881-7.623 3.389-1.867 7.194-2.8 11.417-2.8 4.174 0 7.808.933 10.902 2.8 3.142 1.815 5.426 4.434 6.85 7.857l-8.913 5.056c-2.062-3.838-5.033-5.757-8.912-5.757-2.996 0-5.476 1.038-7.44 3.112-1.964 2.074-2.946 4.901-2.946 8.479 0 3.578.982 6.405 2.946 8.479 1.964 2.075 4.444 3.112 7.44 3.112 3.928 0 6.899-1.919 8.912-5.757l8.913 5.135c-1.424 3.319-3.708 5.912-6.85 7.779-3.094 1.866-6.728 2.8-10.902 2.8zm38.878-43.096c6.139 0 10.853 1.556 14.143 4.668 3.29 3.06 4.935 7.701 4.935 13.924v23.882h-10.754v-5.212c-2.161 3.889-6.187 5.834-12.08 5.834-3.045 0-5.696-.545-7.955-1.634-2.21-1.089-3.904-2.593-5.083-4.511-1.178-1.919-1.767-4.097-1.767-6.535 0-3.889 1.375-6.949 4.125-9.179 2.799-2.23 7.095-3.345 12.89-3.345h9.133c0-2.645-.761-4.667-2.283-6.068-1.522-1.452-3.806-2.178-6.85-2.178-2.112 0-4.199.363-6.261 1.09-2.014.674-3.732 1.607-5.156 2.8l-4.125-8.48c2.16-1.607 4.738-2.852 7.734-3.733a33.462 33.462 0 019.354-1.323zm-.883 34.928c1.964 0 3.707-.467 5.229-1.4 1.523-.986 2.603-2.412 3.241-4.279v-4.278h-7.881c-4.714 0-7.071 1.633-7.071 4.901 0 1.555.564 2.8 1.694 3.734 1.178.881 2.774 1.322 4.788 1.322zm79.638-34.928c4.959 0 8.888 1.556 11.785 4.668 2.946 3.06 4.419 7.675 4.419 13.846v23.96h-11.49v-22.093c0-3.319-.663-5.782-1.989-7.39-1.277-1.659-3.118-2.489-5.524-2.489-2.701 0-4.837.933-6.409 2.8-1.571 1.816-2.357 4.538-2.357 8.168v21.004h-11.49v-22.093c0-6.586-2.505-9.879-7.513-9.879-2.652 0-4.764.933-6.335 2.8-1.571 1.816-2.357 4.538-2.357 8.168v21.004h-11.491V89.74h10.975v4.823a14.615 14.615 0 015.377-4.045c2.161-.934 4.518-1.4 7.071-1.4 2.799 0 5.328.596 7.587 1.788 2.259 1.141 4.076 2.827 5.451 5.057a16.486 16.486 0 016.113-5.056c2.505-1.193 5.23-1.79 8.177-1.79zm48.454 0c3.683 0 7.022.908 10.017 2.723 3.045 1.763 5.426 4.278 7.145 7.546 1.719 3.215 2.578 6.975 2.578 11.279 0 4.305-.859 8.09-2.578 11.357-1.719 3.216-4.1 5.731-7.145 7.546-2.995 1.763-6.334 2.645-10.017 2.645-5.058 0-9.036-1.685-11.933-5.056v22.593l-11.49-3.068V89.74h10.975v4.823c2.848-3.63 6.997-5.446 12.448-5.446zm-1.989 33.139c2.946 0 5.352-1.037 7.218-3.112 1.916-2.126 2.873-4.952 2.873-8.479 0-3.526-.957-6.327-2.873-8.401-1.866-2.126-4.272-3.19-7.218-3.19-2.946 0-5.377 1.064-7.292 3.19-1.866 2.074-2.799 4.875-2.799 8.401 0 3.527.933 6.353 2.799 8.479 1.915 2.075 4.346 3.112 7.292 3.112z"
                fill="#0B082D"
              ></path>
              <circle cx="46.04" cy="45.75" r="45.5" fill="#0BF082"></circle>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M94.457 45.856H45.505v89.421h48.952c13.208 0 23.915-10.707 23.915-23.915 0-8.909-4.872-16.68-12.097-20.795 7.225-4.115 12.097-11.887 12.097-20.796 0-13.208-10.707-23.915-23.915-23.915z"
                fill="#047AF3"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M91.165 45.856c0 25.187-20.442 45.605-45.657 45.605h-.003V45.856h45.66z"
                fill="#0DC0CB"
              ></path>
            </svg>
            <ul>
              <li>Conceptos de la Programación</li>
              <li>HTML y CSS</li>
              <li>Introducción a la Programación</li>
              <li>JavaScript</li>
              <li>React (En curso)</li>
            </ul>
          </div>
          <div className="card-educacion">
            <img className="informa" src="images/informatorio.png" alt="" />
            <ul>
              <li>Introducción a la Programación</li>
              <li>Desarrollo Web</li>
              <li>Especialización en Tecnlogías de Desarrollo - React</li>
            </ul>
          </div>
          <div className="card-educacion">
            <img className="codoacodo" src="images/codoacodo.jfif" alt="" />
            <ul>
              <li>Introducción a Big Data</li>
              <li>FullStack Developer - JavaScript/NodeJs (En curso)</li>
            </ul>
          </div>
          <div className="card-educacion">
            <img className="alura" src="images/allura.svg" alt="" />
            <ul>
              <li>Formación Principiante en Programación</li>
              <li>Formación HTML y CSS</li>
              <li>Formación Front End (En Curso)</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Base;
