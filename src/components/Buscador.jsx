import React from 'react';

function Buscador({ busqueda, setBusqueda }) {
  
  // Esta función se ejecuta cada vez que escribís una letra
  const manejarCambio = (e) => {
    setBusqueda(e.target.value);
  };

  return (
    <div className="contenedor-buscador">
        <input 
            type="text" 
            id="input-buscador" 
            placeholder="🔍 Buscar mate, termo, bombilla..." 
            value={busqueda}
            onChange={manejarCambio} // Acá conectamos con React
        />
    </div>
  );
}

export default Buscador;