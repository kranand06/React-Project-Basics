import { useState } from 'react'
import './bg.css'
import Button from './button'

function Background() {

  let [colour,setColor]=useState("white")

  return (
    <div className="main" style={{backgroundColor : colour}}>
      <h1 style={{color : "gold"}}>This is a background</h1>
      <Button color="red" setColor={setColor} />
      <Button color="green" setColor={setColor} />
      <Button color="yellow" setColor={setColor} />
      <Button color="blue" setColor={setColor} />
      <Button color="white" setColor={setColor} />
      <Button color="black" setColor={setColor} />
      </div>
  )
}

export default Background
