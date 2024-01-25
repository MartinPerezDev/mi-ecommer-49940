import { useEffect, useState } from "react";

import obtenerProductos from "../../utilidades/data";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

import "./ItemListContainer.css";

const ItemListContainer = ({ saludo }) => {
  const [productos, setProductos] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    setProductos([
      {
        id: "hgt344",
        nombre: "Auriculares WF XB700",
        descripcion: "Este es el mejor auricular del mundo",
        stock: 1,
        precio: 15000,
        categoria: "auriculares",
        imagen: "/img/auriculares-WF-XB700.webp",
      },
      {
        id: "ljm322",
        nombre: "Auriculares WH CH720N",
        descripcion: "Este es el mejor teclado del mundo",
        stock: 2,
        precio: 12000,
        categoria: "auriculares",
        imagen: "/img/auriculares-WH-CH720N.webp",
      },
    ]);
  }, [categoria]);

  return (
    <div className="item-list-container">
      <p className="saludo">{saludo}</p>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
