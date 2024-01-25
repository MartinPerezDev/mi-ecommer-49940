import { useState } from "react"
import "./CondicionalClass.css"
import CondicionalProps from "./CondicionalProps"

const RenderingCondicional = () => {
  const [datos, setDatos] = useState([
    {
      nombre: "Juan"
    }
  ])

  return (
    <>
      <CondicionalProps condicion={false} />
    </>
  )
}
export default RenderingCondicional