function Tarea({ tarea, onEliminar, onCompletar }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "8px 12px",
        margin: "6px 0",
        borderRadius: "8px",
        background: tarea.completada ? "#d4edda" : "#fff",
        border: "1px solid #ccc",
      }}
    >
      <span
        style={{
          textDecoration: tarea.completada ? "line-through" : "none",
        }}
      >
        {tarea.titulo}
      </span>
      <div style={{ display: "flex", gap: "8px" }}>
        {!tarea.completada && (
          <button
            onClick={() => onCompletar(tarea.id)}
            style={{
              background: "#28a745",
              color: "white",
              border: "none",
              padding: "4px 8px",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            ✅ Completar
          </button>
        )}
        <button
          onClick={() => onEliminar(tarea.id)}
          style={{
            background: "#dc3545",
            color: "white",
            border: "none",
            padding: "4px 8px",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          🗑 Eliminar
        </button>
      </div>
    </div>
  );
}

export default Tarea;
