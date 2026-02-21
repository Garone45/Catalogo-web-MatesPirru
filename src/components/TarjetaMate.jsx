import React from 'react';

function TarjetaMate({ nombre, precio, imagen, alHacerClick }) {
  const precioLindo = precio.toLocaleString('es-AR');

  return (
    <div className="tarjeta-mate">
      
      {/* 1. Al div de la foto le agregamos estilo 'relative' y 'cursor pointer' */}
      <div 
        className="foto-producto" 
        onClick={() => alHacerClick(imagen)}
        style={{ position: 'relative', cursor: 'pointer', overflow: 'hidden' }}
      >
        <img src={imagen} alt={nombre} loading="lazy" style={{ width: '100%', display: 'block' }} />

        {/* 2. EL ÍCONO DE ZOOM (Lupita flotante) */}
        <div style={{
            position: 'absolute',
            bottom: '10px',
            right: '10px',
            backgroundColor: 'rgba(255, 255, 255, 0.9)', // Fondo blanco semitransparente
            borderRadius: '50%',
            width: '35px',
            height: '35px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
            fontSize: '12px', 
            color: '#333'
        }}>
            <i className="fa-solid fa-expand"></i>
        </div>
      </div>
      
      <div className="info-producto">
        <h3>{nombre}</h3>
        <span className="precio">${precioLindo}</span>
        
        <a 
          href="https://ig.me/m/matespirru" 
          className="btn-comprar" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
        >
          Consultar
          <i className="fa-brands fa-instagram" style={{ fontSize: '1.2em' }}></i>
        </a>

      </div>
    </div>
  );
}

export default TarjetaMate;