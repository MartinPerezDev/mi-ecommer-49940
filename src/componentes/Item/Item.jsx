import { Link } from "react-router-dom";
import { useState } from "react";

import "./Item.css";

const Item = ({ producto }) => {
  const [agrandar, setAgrandar] = useState(false);

  const handleMouseOver = () => {
    setAgrandar(true);
  };

  const handleMouseLeave = () => {
    setAgrandar(false);
  };

  /*
  const handleMouseChange = () =>{
    setAgrandar(!agrandar)
  }
  */

  const estiloTarjeta = { 
    transform: agrandar ? 'scale(1.1)' : 'scale(1)',
    transition: 'transform 0.3s ease-in-out'
  }

  return (
    <div
      className="item"
      style={ estiloTarjeta }
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <img className="image" src={producto.imagen} alt={producto.nombre} />
      <p className="titulo"> {producto.nombre} </p>
      <p className="precio">$ {producto.precio} </p>
      <Link to={`/detalle/${producto.id}`} className="link">
        Ver mas
      </Link>
    </div>
  );
};
export default Item;
