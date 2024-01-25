import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import "./Carrito.css"

const Carrito = () => {
  const { carrito } = useContext(CartContext);

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
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Carrito;
