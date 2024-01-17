import { useEffect } from "react"

const EjemploTitulo = () => {

  useEffect( ()=>{
    
    //declaramos el controlador del evento
    const mostrarAnchoVentana = ()=>{
      console.log("Ancho: ", window.innerWidth)
    }
  
    //declarando el evento a escuchar
    window.addEventListener('resize', mostrarAnchoVentana)

    //eliminamos el evento al desmontar el componente para evitar que se stackeen(acumulen)
    return () =>{
      window.removeEventListener('resize', mostrarAnchoVentana)
    }
  }, [])


  return (
    <div>
      <p>Soy EjemploTitulo</p>
    </div>
  )
}

export default EjemploTitulo