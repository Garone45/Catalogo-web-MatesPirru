import React from 'react';

// 1. REVISÁ ESTA RUTA: Asegurate de que "fondo-portada.webp" 
// exista adentro de la carpeta "img" que está en "src".
import fondoMates from '/img/fondo-portada.webp'; 

function Portada() {
  return (
    <section 
      className="portada" 
      style={{
        background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${fondoMates})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="contenido-portada">
        <img 
            src="./img/logo-matespirru-blanco.webp" 
            alt="Mates Pirru" 
            className="logo-portada" 
            fetchpriority="high" 
        />
        {/* En tu Portada.jsx, cambiá el <p> por esto: */}
<p className="eslogan-pro">Si te acompaña MatesPirru, elegiste bien!</p>
        <a href="#mates-seccion" className="btn-coleccion">
          Ver Colección
        </a>
      </div>
    </section>
  );
}

export default Portada;