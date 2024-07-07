import { useEffect, useState, useRef } from "react";
import axios from "axios";
import Pokecard from "./Pokecard";
import "./pokedex.css";
import Pokemon from "./Pokemon";

function Pokedex({ setPokemon }) {
  let [previous, setPrevious] = useState("");
  const intial = useRef(false);
  let [next, setNext] = useState("");
  let [pokelist, setPokelist] = useState([]);
  let [loading, setLoading] = useState(false);
  let [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const getData = async () => {
    const { data } = await axios.get(url);
    setPrevious(data.previous);
    setNext(data.next);
    data.results.forEach(async (element) => {
      const { data } = await axios.get(element.url);
      setPokelist((list) => [...list, data]);
    });
  };
  let handlepage = (newUrl) => {
    intial.current = false;
    setUrl(newUrl);
  };
  useEffect(() => {
    setPokelist("");
    if (intial.current === false) {
      intial.current = true;
      getData();
      setLoading(true);
    }
  }, [url]);
  return (
    <>
      {pokelist ? (
        <div className="grid-layout">
          {pokelist.map((pokemon, index) => (
            <Pokecard key={index} pokemon={pokemon} setPokemon={setPokemon} />
          ))}
        </div>
      ) : (
        "loading"
      )}
      <div className="buttons">
        {previous ? (
          <input
            className="previous"
            type="button"
            value="previous"
            onClick={() => handlepage(previous)}
          />
        ) : (
          ""
        )}
        {next ? (
          <input
            className="next"
            type="button"
            value="next"
            onClick={() => handlepage(next)}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Pokedex;
