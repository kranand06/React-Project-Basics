import './App.css'
import { celc } from './helper';

function Print(d) {
    let data = d.temp

    
  return (
    <>
    <h3 >Temperature : </h3>
    <h1>{Math.round(data.temp)}   {celc}</h1>
    </>
  )
}

export default Print

