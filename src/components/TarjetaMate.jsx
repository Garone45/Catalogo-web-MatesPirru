import React from 'react';

// Agregamos "alHacerClick" a las cosas que recibe el componente
function TarjetaMate({ nombre, precio, imagen, alHacerClick }) {
  const precioLindo = precio.toLocaleString('es-AR');

  return (
    <div className="tarjeta-mate">
      <div className="foto-producto">
        {/* ACÁ ESTÁ EL CAMBIO: Cuando clickean la foto, ejecutamos la función */}
        <img 
          src={imagen} 
          alt={nombre} 
          onClick={() => alHacerClick(imagen)} 
        />
      </div>
      
      <div className="info-producto">
        <h3>{nombre}</h3>
        <span className="precio">${precioLindo}</span>
        
       <a 
          /* 1. Usamos el link corto de Instagram Direct */
          /* IMPORTANTE: Cambiá 'matespirru' por tu usuario exacto de IG */
          href={`https://ig.me/m/matespirru`} 
          
          className="btn-comprar" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
        >
          Consultar
          <i className="fa-brands fa-instagram" style={{marginLeft: '1.2px'}}></i>
        </a>
      </div>
    </div>
  );
}

export default TarjetaMate;