import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Carrito = () => {
  const { carrito } = useContext(CartContext);

  return (
    <div>
      <ul>
        {carrito.map((producto) => (
          <li key={producto.id}>
            <p> {producto.nombre} </p>
            <p> {producto.cantidad} </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Carrito;
