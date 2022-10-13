import React from 'react';
function Boton({ texto, manejarClic }) {
  return (
    <button onClick={manejarClic}>
      {texto}
    </button>
  );
}
export default Boton;