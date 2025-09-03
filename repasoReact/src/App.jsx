import Contador from "./Componentes/Contador";
import MostrarTexto from "./Componentes/MostrarTexto";
import Multiplicar from "./Componentes/Multiplicar";
import CambiarColor from "./Componentes/CambiarColor";
import Formulario from "./Componentes/Formulario";
import ListaPersonas from "./Componentes/ListaPersonas";
import ListaProductos from "./Componentes/ListaProductos";
import Saludo from "./Componentes/Saludo";
import filtroFrutas from "./Componentes/filtroFrutas";
import TotalPrecios from "./Componentes/TotalPrecios";
import FormularioControlado from "./Componentes/formularioControlado";
import AppTareas from "./Componentes/AppTareas";
import Usuarios from "./Componentes/Usuarios";

function App() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#ffe6f0",
        minHeight: "100vh",
        padding: "30px",
        display: "flex",
        flexDirection: "column",
        gap: "25px",
      }}
    >
      <h1 style={{ color: "#cc0066", marginBottom: "20px", textAlign: "center" }}>
        Ejercicios de React
      </h1>

      {[Contador, MostrarTexto, Multiplicar, CambiarColor, Formulario, ListaPersonas, ListaProductos, Saludo, filtroFrutas, TotalPrecios, FormularioControlado, AppTareas, Usuarios].map(
        (Componente, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#ffccdd",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
              width: "100%",   
              textAlign: "center",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.01)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <Componente />
          </div>
        )
      )}
    </div>
  );
}

export default App;
