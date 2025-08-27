import React, { useState } from "react";

function TotalPrecios() {

  const [precios] = useState([100, 250, 50, 300, 120]);

  
  const total = precios.reduce((acumulador, precio) => acumulador + precio, 0);

  return (
    <div>
      <h2>Lista de precios</h2>
      <ul>
        {precios.map((precio, index) => (
          <li key={index}>${precio}</li>
        ))}
      </ul>

      <h3>Total acumulado: ${total}</h3>
    </div>
  );
}

export default TotalPrecios;
