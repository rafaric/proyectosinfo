export const getLatLon = async (ciudad) =>{
    const response = await fetch (`https://api.openweathermap.org/geo/1.0/direct?q=${ciudad}&limit=5&appid=878166499cead282d30ca58437d2016a`)
    const latlon = await response.json();
    return latlon;
}


export const getWeather = async (ciudad) => {
    const resp = await getLatLon(ciudad);
    const lat = resp[0].lat;
    const long = resp[0].lon;
    const respuesta = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=878166499cead282d30ca58437d2016a&units=metric&lang=sp`);
    const clima = await respuesta.json();
    console.log(clima);
    return clima;
}
