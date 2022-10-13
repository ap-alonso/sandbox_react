import Boton from "../assets/Boton";
import { useState } from "react";
function ContadorComp() {
  const [numClics, setNumClics] = useState(0);
  const manejarClic = () => {
    setNumClics(numClics + 1);
  };
  const reiniciarContador = () => {
    setNumClics(0);
  };
  return (
    <div>
      <div>
        <div>{numClics}</div>
        <Boton texto="Clic" manejarClic={manejarClic} />
        <Boton texto="Reiniciar" manejarClic={reiniciarContador}/>
      </div>
    </div>
  );
}
export default ContadorComp;
