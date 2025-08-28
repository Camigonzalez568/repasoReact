import { useState } from "react";
import Tarea from "./Componentes/Tarea"; // 👈 este es el componente hijo que vamos a crear

function AppTareas() {
  const [tareas, setTareas] = useState([]);
  const [titulo, setTitulo] = useState("");

  // 1. Crear tareas
  const agregarTarea = () => {
    if (titulo.trim() === "") return;
    const nuevaTarea = {
      id: Date.now(),
      titulo,
      completada: false,
    };
    setTareas([...tareas, nuevaTarea]);
    setTitulo("");
  };

  // 3. Eliminar tarea
  const eliminarTarea = (id) => {
    setTareas(tareas.filter((t) => t.id !== id));
  };

  // 4. Completar tarea
  const completarTarea = (id) => {
    setTareas(
      tareas.map((t) =>
        t.id === id ? { ...t, completada: true } : t
      )
    );
  };

  // 5. Separar tareas
  const pendientes = tareas.filter((t) => !t.completada);
  const completadas = tareas.filter((t) => t.completada);

  // 6. Contar tareas
  const total = tareas.length;
  const hechas = tareas.reduce(
    (acc, t) => (t.completada ? acc + 1 : acc),
    0
  );

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "20px auto",
        padding: "20px",
        borderRadius: "12px",
        background: "#f0f8ff",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#2c3e50" }}>
        ✅ App de Tareas
      </h2>

      {/* Formulario */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Escribe una tarea..."
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={agregarTarea}
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "10px 16px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          ➕ Agregar
        </button>
      </div>

      {/* 5. Listas */}
      <h3>Pendientes</h3>
      {pendientes.length === 0 ? (
        <p>🎉 No hay tareas pendientes</p>
      ) : (
        pendientes.map((t) => (
          <Tarea
            key={t.id}
            tarea={t}
            onEliminar={eliminarTarea}
            onCompletar={completarTarea}
          />
        ))
      )}

      <h3>Completadas</h3>
      {completadas.length === 0 ? (
        <p>🙌 Aún no completaste ninguna</p>
      ) : (
        completadas.map((t) => (
          <Tarea
            key={t.id}
            tarea={t}
            onEliminar={eliminarTarea}
            onCompletar={completarTarea}
          />
        ))
      )}

      {/* 6. Contador */}
      <div
        style={{
          marginTop: "20px",
          padding: "10px",
          background: "#e6f2f2",
          borderRadius: "8px",
          textAlign: "center",
          color: "#2c3e50",
        }}
      >
        <strong>Total:</strong> {total} | <strong>Completadas:</strong>{" "}
        {hechas}
      </div>
    </div>
  );
}

export default AppTareas;
