export const celc = "°C";


const url="https://api.openweathermap.org/data/2.5/weather?appid=db91ac9c87f25094d88e378940701240&units=metric&q=";

export async function api(city){
    let a = await fetch(url+city)
    let data = await a.json();
    return data.main;
}