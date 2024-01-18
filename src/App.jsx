import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import NavBar from "./componentes/NavBar/NavBar";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Carrito from "./componentes/Carrito/Carrito";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer saludo="Bienvenidos a Sony" />} />
        <Route path="/categoria/:categoria" element={<ItemListContainer saludo="Bienvenidos a Sony" />} />
        <Route path="/detalle/:idProducto" element={<ItemDetailContainer />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="*" element={ <div>Pagina no encontrada</div> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
