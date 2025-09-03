import React, { useState } from "react";

function CambiarColor() {
  const [color, setColor] = useState("black"); 

  return (
    <div
      style={{
        backgroundColor: color,
        padding: "20px",
        minHeight: "150px",
        transition: "background-color 0.3s",
      }}
    >
      <h2>Elige un color de fondo:</h2>
      <select value={color} onChange={(e) => setColor(e.target.value)}>
        <option value="white">Blanco</option>
        <option value="lightblue">Celeste</option>
        <option value="lightgreen">Verde</option>
        <option value="pink">Rosa</option>
      </select>

      <p>Color seleccionado: {color}</p>
    </div>
  );
}

export default CambiarColor;
