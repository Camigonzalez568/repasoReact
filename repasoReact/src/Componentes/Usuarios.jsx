import { useState, useEffect } from "react";

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);   // estado con usuarios
  const [loading, setLoading] = useState(true);   // estado de carga
  const [error, setError] = useState(null);       // estado de error
  const [filtro, setFiltro] = useState("");       // estado para filtro

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("Error al traer los datos");
        const data = await res.json();
        setUsuarios(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsuarios();
  }, []);

  // Filtrar usuarios por nombre o email
  const usuariosFiltrados = usuarios.filter(
    (u) =>
      u.name.toLowerCase().includes(filtro.toLowerCase()) ||
      u.email.toLowerCase().includes(filtro.toLowerCase())
  );

  if (loading) return <p>Cargando...</p>;
  if (error) return <p style={{ color: "red" }}>❌ {error}</p>;

  return (
    <div style={{ padding: "20px", backgroundColor: "#f081e5ff", borderRadius: "12px" }}>
      <h2>Lista de Usuarios</h2>


      <input
        type="text"
        placeholder="Buscar por nombre o email..."
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
        style={{
          marginBottom: "15px",
          padding: "8px",
          borderRadius: "8px",
          border: "1px solid #9b8f8fff",
          width: "100%",
          maxWidth: "400px"
        }}
      />

      <ul style={{ listStyle: "none", padding: 0 }}>
        {usuariosFiltrados.map((usuario) => (
          <li
            key={usuario.id}
            style={{
              backgroundColor: "#e6f7ff",
              margin: "10px 0",
              padding: "12px",
              borderRadius: "8px",
              textAlign: "left"
            }}
          >
            <strong>{usuario.name}</strong> <br />
            📧 {usuario.email} <br />
            👤 @{usuario.username}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Usuarios;
