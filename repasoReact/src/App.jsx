import Contador from "./Componentes/Contador";
import MostrarTexto from "./Componentes/MostrarTexto";
import Multiplicar from "./Componentes/Multiplicar";
import CambiarColor from "./Componentes/CambiarColor";


function App() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f0f4f8",
        minHeight: "100vh",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        alignItems: "center",
      }}
    >

      {[Contador, MostrarTexto, Multiplicar, CambiarColor].map((Componente, index) => (
        <div
          key={index}
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            width: "90%",       
            maxWidth: "600px",  
            textAlign: "center",
            transition: "all 0.3s",
          }}
        >
          <Componente />
        </div>
      ))}
    </div>
  );
}

export default App;