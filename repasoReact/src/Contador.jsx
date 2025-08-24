import { useState } from "react";

function Contador() {

    const[count, setCount] = useState(0);

    const aumentar = () => {
        setCount(count + 1);
    };

    return(
        <div>
        <h1>Contadoor: {count}</h1>
        <button onClick={aumentar}>Haz click aqui</button>
        </div>
    );
    
}

export default Contador;