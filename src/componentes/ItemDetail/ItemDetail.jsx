import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ producto }) => {
  const [toggle, setToggle] = useState(false);

  const añadirProducto = (contador) => {
    setToggle(true);
    const productoCarrito = { ...producto, cantidad: contador };
    console.log(productoCarrito);
  };

  return (
    <div>
      <img src={producto.imagen} alt={producto.nombre} />
      <p> {producto.nombre} </p>
      <p> ${producto.precio} </p>
      {toggle ? (
        <Link to="/carrito">Ir al carrito</Link>
      ) : (
        <ItemCount stock={producto.stock} añadirProducto={añadirProducto} />
      )}
    </div>
  );
};
export default ItemDetail;
