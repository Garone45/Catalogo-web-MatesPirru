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
          href={`https://wa.me/5491138517333?text=Me%20interesa%20${nombre}`} 
          className="btn-comprar" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Comprar
        </a>
      </div>
    </div>
  );
}

export default TarjetaMate;