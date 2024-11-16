import { useParams } from 'react-router-dom'


function Params() {
    const data =useParams()

  return (
    <>
    Hello this is : {data.usr}
    </>
  )
}

export default Params
