export const getWeather = async (ciudad) => {
    const respuesta = await fetch(`${process.env.REACT_APP_WEATHER_URL}${ciudad}&key=${process.env.REACT_APP_WEATHER_KEY}`);
    const clima = await respuesta.json();
    return clima;
}
