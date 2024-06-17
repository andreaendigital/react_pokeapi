import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import context from "./Context";
import Navegacion from "./components/Navbar";
import Home from "./views/Home";
import Pokemones from "./views/Pokemones";
import Detalle from "./components/Detalle";

function App() {
  const [pokemones, setPokemones] = useState([]);

  return (
    <context.Provider value={{ pokemones, setPokemones }}>
      <Router>
        <Navegacion />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/pokemones" element={<Pokemones />} />
          <Route path="/pokemones/:nombre" element={<Detalle />} />
        </Routes>
      </Router>
    </context.Provider>
  );
}

export default App;