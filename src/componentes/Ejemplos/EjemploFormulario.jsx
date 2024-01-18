import { useState } from "react";

const EjemploFormulario = () => {
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [email, setEmail] = useState("");

  const cambiarNombre = (event) => {
    setNombre(event.target.value);
  };

  const cambiarDireccion = (event) => {
    setDireccion(event.target.value);
  };

  const cambiarEmail = (event) => {
    setEmail(event.target.value);
  };

  const enviarFormulario = (event) =>{
    event.preventDefault()
    const usuario = { nombre, direccion, email }
    console.log(usuario)
  }

  return (
    <form onSubmit={enviarFormulario} >
      <label>
        Nombre:
        <input type="text" value={nombre} onChange={cambiarNombre} />
      </label>

      <label>
        Direccion:
        <input type="text" value={direccion} onChange={cambiarDireccion} />
      </label>

      <label>
        Email:
        <input type="email" value={email} onChange={cambiarEmail} />
      </label>

      <button type="submit">Enviar</button>
    </form>
  );
};
export default EjemploFormulario;
