import './App.css'
import { useEffect, useState } from 'react';
import { api } from './helper';
import Print from './printData';
import Searchbox from './search';

function Weather() {

    const [city, setCity] = useState("Ranchi");
    const [weat, setWeat] = useState({});




    const search = async () => {
        try {
            setWeat(await api(city))
          } catch (error) {
            
          }
        
    }

    useEffect(() => {
        async function initial() {
            setWeat(await api(city))
        }
        initial();
    }, [])


    return (
        <div className="counter">

            <Searchbox city={city} handler={ (e) =>setCity(e.target.value) } search={search}/>

            <Print temp={weat} />

        </div>
    )
}

export default Weather