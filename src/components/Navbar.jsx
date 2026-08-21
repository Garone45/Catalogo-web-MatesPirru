import React from 'react';

function Navbar({ alBuscar, valorBusqueda }) {
  return (
    <nav className="navbar">
      {/* Caja 1: Izquierda (Logo) */}
      <div className="nav-logo">
        <img src="img/logo-matespirru-blanco.webp" alt="Mates Pirru" />
      </div>

      {/* Caja 2: Centro (Buscador) */}
      <div className="nav-centro">
        <div className="buscador-lindo-nav">
          <i className="fa-solid fa-magnifying-glass icono-lupa"></i>
          <input 
            type="text" 
            placeholder="¿Qué mate buscás hoy?" 
            onChange={alBuscar}
            value={valorBusqueda}
          />
        </div>
      </div>

      {/* Caja 3: Derecha */}
      <ul className="nav-menu">
        {/* Enlaces visibles solo en PC */}
        <li className="nav-item-pc"><a href="#mates-seccion">Mates</a></li>
        <li className="nav-item-pc"><a href="#accesorios-seccion">Accesorios</a></li>

        {/* Enlace visible solo en celular */}
        <li className="nav-item-mobile"><a href="#mates-seccion">Catálogo de productos</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;