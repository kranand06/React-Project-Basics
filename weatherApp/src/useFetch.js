import {useState , useEffect} from 'react'

const useFetch = (city) => {

const [data,setData]=useState({})

    const url="https://api.openweathermap.org/data/2.5/weather?appid=db91ac9c87f25094d88e378940701240&units=metric&q=";

    useEffect(()=>{
        fetch(url+city)
        .then((res)=>res.json())
        .then((res)=>setData(res))

    },[city])
    return data.main; 
}

export default useFetch