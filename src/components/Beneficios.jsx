import React from 'react';

function Beneficios() {
  return (
    <div className="beneficios">
        <div className="item-beneficio">
            <i className="fa-solid fa-truck-fast"></i>
            <h3>Envíos a todo el país</h3>
            <p>Llegamos a cada rincón de Argentina.</p>
        </div>
        <div className="item-beneficio">
            <i className="fa-regular fa-credit-card"></i>
            <h3>Cuotas sin interés</h3>
            <p>Aceptamos transferencia bancaria.</p>
        </div>
        <div className="item-beneficio">
            <i className="fa-solid fa-leaf"></i>
            <h3>100% Artesanal</h3>
            <p>Productos hechos a mano.</p>
        </div>
    </div>
  );
}

export default Beneficios;