import React, { useState, useEffect } from 'react';

// IMPORTAMOS LOS COMPONENTES
import Navbar from './components/Navbar';

import Portada from './components/Portada';
import Beneficios from './components/Beneficios';
import Categorias from './components/Categorias'; // Si no tenés este archivo, borrá esta línea
import Carrusel from './components/Carrusel';     // <--- EL NUEVO COMPONENTE
import ModalZoom from './components/Modal';   // El que muestra la foto grande
import Footer from './components/Footer';         // Si tenés footer
import './App.css';

function App() {
  // 1. ESTADO: Acá guardamos los productos que vienen del JSON
  const [productos, setProductos] = useState([]);
  
  // 2. ESTADO: Acá guardamos qué imagen se está viendo en grande (null = ninguna)
  const [zoomImagen, setZoomImagen] = useState(null);

  // 3. EFECTO: Carga los datos apenas abre la página
  useEffect(() => {
    fetch('./productos.json')
      .then((res) => res.json())
      .then((data) => {
        setProductos(data);
      })
      .catch((err) => console.error("Error cargando productos:", err));
  }, []);

  // Función para abrir el zoom
  const abrirZoom = (imagen) => {
    setZoomImagen(imagen);
  };

  // Función para cerrar el zoom
  const cerrarZoom = () => {
    setZoomImagen(null);
  };

  return (
    <div className="App">
      
      {/* BARRA DE NAVEGACIÓN */}
      <Navbar />

      {/* PORTADA GRANDE */}
      <Portada />
     
      
      {/* BOTONES DE CATEGORÍAS (Si los tenés) */}
      <Categorias />
      

      {/* --- ACÁ EMPIEZAN LOS CARRUSELES --- */}
      {/* En vez de repetir código, llamamos al componente Carrusel varias veces */}

      <div id="mates-seccion">
    <div className="bloque-central">
        <h2 className="titulo-principal-seccion">NUESTRO CATÁLOGO</h2>
        
        <div className="buscador-lindo">
            <i className="fa-solid fa-magnifying-glass icono-lupa"></i>
            <input 
                type="text" 
                placeholder="Buscar mate, termo, bombilla..." 
                className="input-buscador"
            />
        </div>
      </div>

      <Carrusel 
        titulo="Mates Imperiales" 
        categoria="imperiales" 
        productos={productos} 
        alHacerClick={abrirZoom} 
      />
      </div>
      <Carrusel 
        titulo="Mates Torpedos" 
        categoria="torpedo"
        productos={productos} 
        alHacerClick={abrirZoom} 
      />
      <Carrusel 
        titulo="Mates Camioneross" 
        categoria="camionero" 
        productos={productos} 
        alHacerClick={abrirZoom} 
      />

      <Carrusel 
        titulo="Mates Criollos" 
        categoria="criollo" 
        productos={productos} 
        alHacerClick={abrirZoom} 
      />
      <div id="accesorios-seccion">
      <div className="bloque-separador">
        <h2 className="titulo-principal-seccion">EQUIPATE COMPLETO</h2>
        <p className="subtitulo-seccion">Lo mejor para acompañar tus mates</p>
      </div>
      </div>

      <Carrusel 
        titulo="Termos" 
        categoria="termo" 
        productos={productos} 
        alHacerClick={abrirZoom} 
      />

      <Carrusel 
        titulo="Materas" 
        categoria="matera" 
        productos={productos} 
        alHacerClick={abrirZoom} 
      />

      <Carrusel 
        titulo="Yerbas" 
        categoria="yerba" 
        productos={productos} 
        alHacerClick={abrirZoom} 
      />

      
     
      {/* --- FIN DE LOS CARRUSELES --- */}

  

      {/* MODAL DE ZOOM (Solo aparece si zoomImagen tiene algo) */}
      {zoomImagen && (
        <ModalZoom 
            imagen={zoomImagen} 
            cerrar={cerrarZoom} 
        />
      )}


       <Beneficios />

      {/* PIE DE PÁGINA */}
      <Footer id/>

    </div>
  );
}

export default App;