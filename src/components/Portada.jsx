import React from 'react';

function Portada() {
  return (
    // CAMBIO ACÁ: Agregamos el estilo en línea (style) con la ruta con PUNTO
    <header className="portada" style={{ backgroundImage: "url('./img/fondo-portada.webp')" }}>
        
        <img src="./img/logo-matespirru-blanco.webp" alt="MatesPirru" className="logo-gigante" />
        
       <p className="eslogan-pro">Si elegis MastesPirru, elegiste bien.. </p>
        
        <a href="#mates-seccion" className="btn-coleccion">Ver Colección</a>
    </header>
  );
}

export default Portada;