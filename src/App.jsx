import Pokedex from "./compomantes/Pokedex";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Randompokemon from "./compomantes/Randompokemon";
import Pokemon from "./compomantes/Pokemon";
import { useState } from "react";

function App(props) {
  const [pokemon, setPokemon] = useState("");
  return (
    <>
      <BrowserRouter>
        <nav className="nav">
          <Link to="/">Pokedex</Link>
          <Link to="/randompokemon">Random</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Pokedex setPokemon={setPokemon} />} />
          <Route path="/pokemon" element={<Pokemon pokemon={pokemon} />} />
          <Route path="/randompokemon" element={<Randompokemon />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
