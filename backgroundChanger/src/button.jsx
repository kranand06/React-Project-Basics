import './bg.css'

function Button({color,setColor}) {


    const clicked = () => {
        setColor(color)
    }

  return (
    <>
      <button onClick={clicked}>
        {color}
      </button>
    </>
  )
}

export default Button
