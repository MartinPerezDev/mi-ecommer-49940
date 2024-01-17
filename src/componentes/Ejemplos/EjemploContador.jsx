import { useState, useEffect } from "react";
import EjemploTitulo from "./EjemploTitulo"

const EjemploContador = () => {
  console.log("Se monto o se actualizo el componente");
  //hook de estado: useState o variable de estado
  const [contador, setContador] = useState(1);
  const [toggle, setToggle] = useState(true);

  const aumentar = () => {
    setContador(contador + 1);
  };

  const alternarToggle = () => {
    //guarda el valor contrario al actual
    setToggle(!toggle);
  };

  //se ejecuta al montar el componente
  //Ej: llamadas a api, suscripciones a evenListener
  useEffect(() => {
    console.log("1er useEffect");
  }, []);

  //se ejecuta en el montaje y cada vez que contador se actualice
  //ej: para realizar acciones especificas cuando una variable dependiente cambie
  useEffect(() => {
    console.log("2do useEffect");
  }, [contador]);

  //se ejecuta en el montaje y cada vez que se actualice cualquier estado del componente
  //ej: operaciones globales de monitoreo o registro, actualizaciones generales del proyecto
  useEffect(() => {
    console.log("3er useEffect");
  });

  return (
    <div>
      <div>
        <p>Contador: {contador} </p>
        <button onClick={aumentar}>+</button>
      </div>
      <div>
        <p>Booleano: {toggle.toString()} </p>
        <button onClick={alternarToggle}> Alternar Toggle </button>
        {
          toggle && <EjemploTitulo />
        }
      </div>
    </div>
  );
};

export default EjemploContador;
