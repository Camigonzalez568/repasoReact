function ListaProductos() {
  const productos = [
    { item: "Laptop", precio: 1200 },
    { item: "Auriculares", precio: 250 },
    { item: "Teclado", precio: 150 },
    { item: "Mouse", precio: 100 },
    { item: "Monitor", precio: 800 },
  ];

  return (
    <div>
      <h2>🛒 Lista de Productos</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {productos.map((producto, index) => (
          <li
            key={index}
            style={{
              backgroundColor: "#ffc0cb", // rosa claro
              margin: "10px 0",
              padding: "12px",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "space-between",
              fontWeight: "bold",
              color: "#4a0033",
            }}
          >
            <span>{producto.item}</span>
            <span>${producto.precio}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaProductos;
