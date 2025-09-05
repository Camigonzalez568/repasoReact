import React, { useState } from "react";

function FiltroFrutas() {
  const [frutas] = useState([
    "Manzana",
    "Banana",
    "Pera",
    "Naranja",
    "Frutilla",
    "Mango",
    "Sandía",
    "Melón",
  ]); 
  const [busqueda, setBusqueda] = useState(""); 

 
  const frutasFiltradas = frutas.filter((fruta) =>
    fruta.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div>
      <h2>Filtrar frutas</h2>
      <input
        type="text"
        placeholder="Escribe una fruta"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <ul>
        {frutasFiltradas.length > 0 ? (
          frutasFiltradas.map((fruta, index) => <li key={index}>{fruta}</li>)
        ) : (
          <li>No hay coincidencias</li>
        )}
      </ul>
    </div>
  );
}

export default FiltroFrutas;
