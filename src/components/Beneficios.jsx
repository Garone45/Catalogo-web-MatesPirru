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
          <h3>Pagos Seguros</h3>
          <p>Transferencia o efectivo.</p>
        </div>

        <div className="bloque-item">
          <i className="fa-solid fa-leaf"></i>
          <h3>100% Artesanal</h3>
          <p>Calidad premium garantizada.</p>
        </div>

        {/* --- NUEVO BLOQUE: INSTAGRAM --- */}
        <div className="bloque-item">
          <a href="https://www.instagram.com/matespirru" target="_blank" rel="noopener noreferrer" className="link-ig">
            <i className="fa-brands fa-instagram"></i>
            <h3>Nuestra comunidad</h3>
            <p>@MatesPirru</p>
          </a>
        </div>

      </div>
    </div>
  );
}

export default Beneficios;