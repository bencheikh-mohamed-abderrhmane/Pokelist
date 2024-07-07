import React from "react";
import "./pokemon.css";

function Pokemon({ pokemon }) {
  return (
    <div className="prin">
      <p className="pokename">{pokemon.name}</p>
      <img className="imagepok" src={pokemon.sprites.other.dream_world.front_default} alt="" />
      {pokemon.types.map((type, index) => (
        <p key={index}>{type.type.name}</p>
      ))}
      <div className="abili">
        {pokemon.abilities.map((ability, index) => (
          <p key={index}>{ability.ability.name}</p>
        ))}
      </div>

      {pokemon.stats.map((stat, index) => (
        <div className="stat" key={index}>
          <span>{stat.base_stat}</span>
          <span>{stat.stat.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Pokemon;
