import React, { useRef } from 'react';
import TarjetaMate from './TarjetaMate';

// Recibimos "abrirModal"
function SeccionCategoria({ titulo, productos, filtro, id, abrirModal }) {
  const productosFiltrados = productos.filter(p => p.categoria === filtro);
  const scrollRef = useRef(null);

  if (productosFiltrados.length === 0) return null;

  const scrollear = (direccion) => {
    if (scrollRef.current) {
      const anchoDesplazamiento = 300;
      if (direccion === 'izquierda') {
        scrollRef.current.scrollBy({ left: -anchoDesplazamiento, behavior: 'smooth' });
      } else {
        scrollRef.current.scrollBy({ left: anchoDesplazamiento, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="categoria-bloque" id={id}>
      <h3 className="titulo-categoria">{titulo}</h3>
      
      <div className="contenedor-carrusel">
        <button className="btn-flecha flecha-izq" onClick={() => scrollear('izquierda')}>
            <i className="fa-solid fa-chevron-left"></i>
        </button>

        <div className="grilla-mates" ref={scrollRef}>
          {productosFiltrados.map(producto => (
            <TarjetaMate 
              key={producto.id}
              nombre={producto.nombre}
              precio={producto.precio}
              imagen={producto.imagen}
              // SE LO PASAMOS A LA TARJETA
              alHacerClick={abrirModal} 
            />
          ))}
        </div>

        <button className="btn-flecha flecha-der" onClick={() => scrollear('derecha')}>
            <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}

export default SeccionCategoria;