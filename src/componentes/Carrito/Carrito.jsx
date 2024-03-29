import { useContext } from "react";

import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

import "./Carrito.css";

const Carrito = () => {
  const { carrito, precioTotal, borrarProducto, borrarTodo } =
    useContext(CartContext);

  if (carrito.length === 0) {
    return (
      <div className="carrito-vacio">
        <h2>Ooppss el carrito esta vacio 😢</h2>
        <Link className="button" to="/">
          Volver al inicio
        </Link>
      </div>
    );
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
            <button onClick={() => borrarProducto(producto.id)}>borrar</button>
          </li>
        ))}
      </ul>
      <h3>Total a pagar: ${precioTotal()}</h3>
      <div className="botones-carrito-borrar" onClick={borrarTodo}>
        <p>Vaciar carrito</p>
      </div>
      <Link className="botones-carrito-continuar" to="/checkout">
        <p>Continuar con la compra</p>
      </Link>
    </div>
  );
};
export default Carrito;
