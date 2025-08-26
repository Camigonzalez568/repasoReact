
import React, { useState } from "react";

function Multiplicar() {
  const [numero, setNumero] = useState(0); // número ingresado

  return (
    <div>
      <h2>Ingresa un número:</h2>
      <input
        type="number"
        value={numero}
        onChange={(e) => setNumero(Number(e.target.value))}
        placeholder="Ingresa un número"
      />
      <p>Resultado multiplicado por 2: {numero * 2}</p>
    </div>
  );
}

export default Multiplicar;
