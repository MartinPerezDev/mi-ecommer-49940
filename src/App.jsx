import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import NavBar from "./componentes/NavBar/NavBar";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carrito from "./componentes/Carrito/Carrito";
import { CartProvider } from "./context/CartContext";
import RenderingCondicional from "./componentes/Ejemplos/RenderingCondicional/RenderingCondicional";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer saludo="Bienvenidos a Sony" />} />
          <Route path="/categoria/:categoria" element={<ItemListContainer saludo="Bienvenidos a Sony" />} />
          <Route path="/detalle/:idProducto" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/ejemplos" element={<RenderingCondicional />} />
          <Route path="*" element={ <div>Pagina no encontrada</div> } />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
