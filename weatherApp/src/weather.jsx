import './App.css'
import { useEffect, useState } from 'react';
import { api } from './helper';
import Print from './printData';
import Searchbox from './search';

function Weather() {

    const [city, setCity] = useState("Ranchi");
    const [weat, setWeat] = useState({});



    //function to update state variable and rerender the page

    const handler = (e) => {
        setCity(e.target.value)
    }

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


    const keypress = (e) => {
        if (e.key === "Enter")
            search();
    }

    return (
        <div className="counter">

            <Searchbox city={city} handler={handler} search={search}/>

            <Print temp={weat} />

        </div>
    )
}

export default Weather