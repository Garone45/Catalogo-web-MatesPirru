import React, { useRef } from 'react';
import TarjetaMate from './TarjetaMate';

function Carrusel({ titulo, productos, categoria, alHacerClick }) {
  const filaRef = useRef(null);

  // 1. Filtramos los productos
  const productosDeEstaCategoria = productos.filter(p => p.categoria === categoria);

  // 2. Lógica: Mostrar flechas solo si hay más de 3 productos
  const mostrarFlechas = productosDeEstaCategoria.length > 3;

  const scrollIzquierda = () => {
    if(filaRef.current) {
        filaRef.current.scrollLeft -= 300; 
    }
  };

  const scrollDerecha = () => {
    if(filaRef.current) {
        filaRef.current.scrollLeft += 300;
    }
  };

  // Si no hay productos, no mostramos nada
  if (productosDeEstaCategoria.length === 0) return null;

  return (
    <div className="seccion-carrusel">
      
      {/* 1. TÍTULO CENTRADO CON BARRITA (Fuera de los controles) */}
      <div className="cabecera-titulo">
        <h3 className="titulo-linea">{titulo}</h3>
      </div>

      {/* 2. CONTENEDOR RELATIVO (Acá viven las tarjetas y las flechas flotantes) */}
      <div className="cuerpo-carrusel">
        
        {/* Flecha Izquierda */}
        {mostrarFlechas && (
            <button onClick={scrollIzquierda} className="btn-flecha izq">
                <i className="fa-solid fa-angle-left"></i>
            </button>
        )}

        {/* El Riel de Tarjetas */}
        <div className="riel-tarjetas" ref={filaRef}>
          {productosDeEstaCategoria.map((prod) => (
            <TarjetaMate 
                key={prod.id} 
                {...prod} 
                alHacerClick={alHacerClick}
            />
          ))}
        </div>

        {/* Flecha Derecha */}
        {mostrarFlechas && (
            <button onClick={scrollDerecha} className="btn-flecha der">
                <i className="fa-solid fa-angle-right"></i>
            </button>
        )}

      </div>
    </div>
  );
}

export default Carrusel;