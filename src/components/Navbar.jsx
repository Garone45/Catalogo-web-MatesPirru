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
            <li><a href="#catalogo-mates">Mates</a></li>
            <li><a href="#seccion-accesorios">Accesorios</a></li>
            <li><a href="#contacto">Contacto</a></li>
        </ul>
    </nav>
  );
}

export default Navbar;