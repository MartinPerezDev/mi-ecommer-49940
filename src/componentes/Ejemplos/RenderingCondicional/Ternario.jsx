import { useEffect, useState } from "react"

const Ternario = () => {
  const [cargando, setCargando] = useState(true)

  useEffect(()=>{

    setTimeout(()=> {
      setCargando(false)
    }, 5000)

  }, [])

  return (
    <div>
      <h2>Practicando Operador Ternario</h2>
      {
        cargando ? <h3>Cargando...</h3> : <h3>Cargado con exito!!!</h3>
      }
    </div>
  )
}
export default Ternario