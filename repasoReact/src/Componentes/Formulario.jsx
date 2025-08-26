import { useState } from "react";

function Formulario() {
  const [texto, setTexto] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que se recargue la página
    alert("Texto ingresado: " + texto);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Escribí algo..."
      />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;
