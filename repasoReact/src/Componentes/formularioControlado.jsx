import { useState } from "react";

function FormularioControlado() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div
      style={{
        backgroundColor: "#D0E8E2",   // tarjeta suave (verde/azul)
        padding: "16px",
        borderRadius: "10px",
        border: "1px solid #A7C7C5",
        maxWidth: 600,
        margin: "0 auto",
        color: "#1F4E5F",
      }}
    >
      <h2 style={{ color: "#3A7CA5", marginTop: 0 }}>11️⃣ Formulario controlado</h2>

      <label style={{ display: "block", marginBottom: 8 }}>
        Nombre
        <input
          type="text"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          placeholder="Escribí tu nombre"
          style={{
            width: "100%",
            padding: "10px",
            marginTop: 6,
            borderRadius: 8,
            border: "2px solid #A7C7C5",
            outline: "none",
          }}
        />
      </label>

      <label style={{ display: "block", marginBottom: 8 }}>
        Email
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="tu@correo.com"
          style={{
            width: "100%",
            padding: "10px",
            marginTop: 6,
            borderRadius: 8,
            border: "2px solid #A7C7C5",
            outline: "none",
          }}
        />
      </label>

      <div
        style={{
          marginTop: 14,
          background: "#E6F2F2",
          borderRadius: 8,
          padding: 12,
          border: "1px solid #A7C7C5",
        }}
      >
        <strong>Vista previa (tiempo real):</strong>
        <p style={{ margin: "6px 0" }}>👤 Hola, {form.nombre || "…"} </p>
        <p style={{ margin: 0 }}>✉️ Email: {form.email || "…"} </p>
      </div>
    </div>
  );
}

export default FormularioControlado;
