import { useState } from "react";

function Saludo() {
  const [nombre, setNombre] = useState("");
  const [mostrado, setMostrado] = useState("");

  const handleClick = () => {
    setMostrado(nombre);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "center",
      }}
    >
      <h2>8️⃣ Saludo con Input</h2>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Escribí tu nombre..."
        style={{
          padding: "10px",
          borderRadius: "8px",
          border: "2px solid #cc6699",
          outline: "none",
          width: "200px",
        }}
      />
      <button
        onClick={handleClick}
        style={{
          padding: "10px 20px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#e60073",
          color: "white",
          cursor: "pointer",
        }}
      >
        Saludar
      </button>
      {mostrado && (
        <h3
          style={{
            color: "#cc0066",
            backgroundColor: "#ffc0cb",
            padding: "10px",
            borderRadius: "8px",
            marginTop: "10px",
          }}
        >
          Hola, {mostrado} 
        </h3>
      )}
    </div>
  );
}

export default Saludo;
