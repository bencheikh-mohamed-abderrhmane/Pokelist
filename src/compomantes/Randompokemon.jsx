import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Pokemon from "./Pokemon";

function Randompokemon(props) {
  let load = useRef(false);
  let [random, setRandom] = useState("");
  let getRandompokemon = async () => {
    let pokeID = Math.floor(Math.random() * 1000);
    let { data } = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/" + pokeID + "/"
    );
    setRandom(data);
  };
  useEffect(() => {
    if (load.current === false) {
      getRandompokemon();
      console.log(random);
      load.current = true;
    }
  }, []);
  return <div>{random ? <Pokemon pokemon={random} /> : "loading"}</div>;
}

export default Randompokemon;
