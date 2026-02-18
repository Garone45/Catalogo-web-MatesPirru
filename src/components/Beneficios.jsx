import React from 'react';

function Beneficios() {
  return (
    <div className="contenedor-beneficios-full">
      <div className="fila-beneficios">
        
        <div className="bloque-item">
          <i className="fa-solid fa-truck-fast"></i>
          <h3>Envíos a todo el país</h3>
          <p>Llegamos a cada rincón de Argentina.</p>
        </div>

        <div className="bloque-item">
          <i className="fa-solid fa-credit-card"></i>
          <h3>Cuotas sin interés</h3>
          <p>Aceptamos transferencia bancaria.</p>
        </div>

        <div className="bloque-item">
          <i className="fa-solid fa-leaf"></i>
          <h3>100% Artesanal</h3>
          <p>Productos hechos a mano.</p>
        </div>

      </div>
    </div>
  );
}

export default Beneficios;