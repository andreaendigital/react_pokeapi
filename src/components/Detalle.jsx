import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detalle() {
  const URL = "https://pokeapi.co/api/v2/pokemon/";
  const { nombre } = useParams();
  const [foto, setFoto] = useState("");
  const [stats, setStats] = useState([]);

  useEffect(() => {
    obtenerDetalle();
  }, []);

  const obtenerDetalle = async () => {
    try {
      const response = await fetch(URL + nombre);
      const data = await response.json();
      setFoto(data.sprites.other["official-artwork"].front_default);
      setStats(data.stats);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="contenedor text-white">
      <h1 className="text-center mt-3">{nombre[0].toUpperCase() + nombre.substring(1)}</h1>
      <div className="detalle">
        <img src={foto} alt="" className="me-3"></img>
        <div id="stats">
          {stats.map((stat) => (
            <h3 key={stat.stat.name}>
              {stat.stat.name} : <span>{stat.base_stat}</span>
            </h3>
          ))}
        </div>
      </div>
    </div>
  );
}