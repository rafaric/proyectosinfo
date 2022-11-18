import { useEffect, useState } from "react";
import InformacionEquipo from "../components/InformacionEquipo/InformacionEquipo";
import { TarjetaSuperHeroeList } from "../components/InformacionSuperheroes/TarjetaSuperHeroe";
import Titulo from "../components/Titulo/Titulo";
import { getSuperHeroes } from "../servicios/superheroes";
import './PaginaSuperHeroes.css'
import NavList from './navegacion'

//const info = {};

const PaginaSuperHeroes = () => {
    //hooks (estado interno)
    const[informacion, setinformacion] = useState();
    const[loading, setLoading] = useState(false);
    
    const getSuperHeroesServicio = async()=>{
        const res = await getSuperHeroes();
        setinformacion(res);
        setLoading(false)
    }
    useEffect(()=>{
        //usando promesa
        /* getSuperHeroes()
            .then(res =>{
                setinformacion(res);
            }) */
        if(!informacion){
            setLoading(true);
            getSuperHeroesServicio();
        }
    },[informacion,loading]);
    if (!informacion){
        return <><NavList /><div><h1>Cargando</h1></div></>
    }
    return (
        <>
        <NavList />
        <main className="super-page-container">
            
            <Titulo 
                tipo='h1' 
                titulo={informacion.squadName}
            />
            <InformacionEquipo 
                ciudad={informacion.homeTown}
                anioFormacion={informacion.formed}
                baseSecreta={informacion.secretBase}

            />
            <Titulo 
                tipo='h2' 
                titulo='Miembros'/>
            <TarjetaSuperHeroeList 
                miembros={informacion.members}
            />
        </main>
        </>
    )
}

export default PaginaSuperHeroes;