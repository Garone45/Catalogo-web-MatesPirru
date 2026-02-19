import React from 'react';

function Navbar({ alBuscar, valorBusqueda }) {
  return (
    <nav className="navbar">
      {/* 1. Lado Izquierdo: Logo */}
      <div className="logo-icon">
        <img src="img/logo-matespirru-blanco.webp" alt="Mates Pirru" />
      </div>

      {/* 2. Medio: El Buscador Lindo */}
      <div className="buscador-lindo-nav">
        <i className="fa-solid fa-magnifying-glass icono-lupa"></i>
        <input 
          type="text" 
          placeholder="¿Qué buscás hoy?" 
          className="input-buscador"
          onChange={alBuscar}
          value={valorBusqueda}
        />
      </div>

      {/* 3. Lado Derecho: Links */}
      <ul className="menu">
        <li><a href="#mates-seccion">Mates</a></li>
        <li><a href="#accesorios-seccion">Accesorios</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;