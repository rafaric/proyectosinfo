const SUPERHEROES_URL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
//llamado al servicio. se puede agregar el try - catch
export const getSuperHeroes = async() =>{
    const respuesta = await fetch(SUPERHEROES_URL);
    return respuesta.json();
}

