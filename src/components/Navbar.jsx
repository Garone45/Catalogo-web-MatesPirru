import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
        {/* El logo que te lleva al inicio */}
        <a href="#" className="logo-icon">
            <img src="img/logo-matespirru-blanco.webp" alt="MatesPirru" />
        </a>

        {/* Los enlaces del menú */}
        <ul className="menu">
        {/* Usamos el ID de la sección con un # adelante */}
        <li><a href="#mates-seccion">Mates</a></li>
        <li><a href="#accesorios-seccion">Accesorios</a></li>
        <li><a href="#footer">Contacto</a></li> 
      </ul>
    </nav>
  );
}

export default Navbar;