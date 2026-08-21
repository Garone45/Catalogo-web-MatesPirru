import React from 'react';
import fondoMates from '/img/fondo-portada.webp';
import logoBlanco from '/img/logo-matespirru-blanco.webp';

function Portada() {
  return (
    <section 
      className="portada" 
      style={{
        background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${fondoMates})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top' /* Prioriza la parte superior de la foto */
      }}
    >
      <div className="contenido-portada">
        <img 
          src={logoBlanco} 
          alt="Mates Pirru" 
          className="logo-portada" 
          fetchpriority="high" 
        />
        <p className="eslogan-pro">Si te acompaña MatesPirru, elegiste bien!</p>
        <a href="#mates-seccion" className="btn-coleccion">
          Ver Colección
        </a>
      </div>
    </section>
  );
}

export default Portada;