import React from 'react';

function Portada() {
  return (
    <section className="portada" id="inicio">
      <div className="contenido-portada">
        {/* 1. Logo al medio */}
        <img src="./img/logo-matespirru-blanco.webp" alt="Mates Pirru" className="logo-portada" />
        
        {/* 2. Slogan abajo del logo */}
        <p className="eslogan-pro">Tradición, amigos y buenos momentos.</p>
        
        {/* 3. Botón abajo del slogan */}
        <a href="#mates-seccion" className="btn-coleccion">
          Ver Colección
        </a>
      </div>
    </section>
  );
}

export default Portada; // El export que te faltaba para el deploy