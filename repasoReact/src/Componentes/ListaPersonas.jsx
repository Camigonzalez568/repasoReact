function ListaPersonas() {
  const personas = ["Ana", "Luis", "María", "Juan", "Sofía"]; // array simple

  return (
    <div>
      <h2>👥 Lista de Personas</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {personas.map((nombre, index) => (
          <li
            key={index}
            style={{
              backgroundColor: "#ffb6c1", // rosa suave
              margin: "8px 0",
              padding: "10px",
              borderRadius: "8px",
              color: "#4a0033",
              fontWeight: "bold",
            }}
          >
            {nombre}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaPersonas;