import SumaComp from "./components/Suma/Suma";
import { useState } from "react";
function App() {
  let num1 = 1;
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
    <div className="App">
      <SumaComp />
    </div>
  );
}
export default App;
