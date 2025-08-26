import React, { useState } from "react";

function MostrarTexto() {
  const [inputTexto, setInputTexto] = useState(""); // lo que se escribe
  const [textoMostrado, setTextoMostrado] = useState(""); // lo que se muestra después

  const handleClick = () => {
    setTextoMostrado(inputTexto); // al hacer clic, mostramos el texto
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
