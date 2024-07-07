import React from "react";
import { useNavigate } from "react-router";

function Pokecard({ pokemon, setPokemon }) {
  let navigate = useNavigate();
  let handleclick = () => {
    setPokemon(pokemon);
    navigate("/pokemon");
  };
  return (
    <div
      className={"pokecard " + pokemon.types[0].type.name}
      onClick={() => handleclick()}
    >
      <img className="pokeimg" src={pokemon.sprites.front_default} alt="" />
      <p className="pokename">{pokemon.name}</p>
    </div>
  );
}

export default Pokecard;
