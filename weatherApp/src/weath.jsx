import './App.css'
import useFetch from './useFetch'

function Weath() {
    let data = useFetch("kolkata")
    console.log(data.temp)

  return (
    <>
    <p>Temp</p>
    </>
  )
}

export default Weath
