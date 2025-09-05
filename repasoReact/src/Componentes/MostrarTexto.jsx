import React, { useState } from "react";

function MostrarTexto() {
  const [inputTexto, setInputTexto] = useState(""); 
  const [textoMostrado, setTextoMostrado] = useState("");

  const handleClick = () => {
    setTextoMostrado(inputTexto); 
  };

  return (
    <div>
      <h2>Escribe algo:</h2>
      <input
        type="text"
        value={inputTexto}
        onChange={(e) => setInputTexto(e.target.value)}
        placeholder="Ingresa tu texto aquí"
      />
      <button onClick={handleClick}>Mostrar texto</button>
      {textoMostrado && <p>Texto ingresado: {textoMostrado}</p>}
    </div>
  );
}

export default MostrarTexto;
