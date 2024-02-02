import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

import "./Carrito.css"

const Carrito = () => {
  const { carrito, precioTotal, borrarProducto, borrarTodo } = useContext(CartContext);

  if(carrito.length === 0){
    return(
      <div>
        <h2>Opppss... no hay productos en el carrito</h2>
        <Link to="/"> Volver al inicio </Link>
      </div>
    )
  }

  return (
    <div className="carrito">
      <ul className="lista">
        {carrito.map((producto) => (
          <li className="producto" key={producto.id}>
            <img
              className="imagen"
              src={producto.imagen}
              alt={producto.nombre}
            />
            <p className="texto nombre">{producto.nombre}</p>
            <p className="texto">cantidad: {producto.cantidad}</p>
            <p className="texto">precio c/u: ${producto.precio}</p>
            <button onClick={ () => borrarProducto(producto.id) }>Eliminar</button>
          </li>
        ))}
      </ul>
      <div>
        <p>Precio total: {precioTotal()} </p>
        <button onClick={borrarTodo} >Eliminar carrito</button>
        <Link to="/checkout" >Continuar compra</Link>
      </div>
    </div>
  );
};
export default Carrito;
