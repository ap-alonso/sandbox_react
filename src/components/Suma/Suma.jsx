import Boton from "./Boton";
import { useState } from "react";
function SumaComp() {
  let num1 = 3;
  let num2 = 5;
  const [numClics, setNumClics] = useState(0);
  const suma = () => {
    let num3 = num1 + num2;
    setNumClics(num3);
  };
  const reiniciarResultado = () => {
    setNumClics(0);
  };
  return (
    <div className="contenedor-principal">
      <div>
        {num1} + {num2} = {numClics}
      </div>
      <Boton texto="Sumar" manejarClic={suma} />{" "}
      <Boton texto="Reiniciar" manejarClic={reiniciarResultado} />
    </div>
  );
}
export default SumaComp;