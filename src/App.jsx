import React, { useState, useEffect } from 'react';

// IMPORTAMOS LOS COMPONENTES
import Navbar from './components/Navbar';
import Portada from './components/Portada';
import Beneficios from './components/Beneficios';
import Categorias from './components/Categorias';
import Carrusel from './components/Carrusel';
import ModalZoom from './components/Modal';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [zoomImagen, setZoomImagen] = useState(null);

  useEffect(() => {
    fetch('./productos.json')
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((err) => console.error("Error cargando productos:", err));
  }, []);

  const manejarBusqueda = (e) => {
    setBusqueda(e.target.value.toLowerCase());
  };

  const productosFiltrados = productos.filter(prod => 
    prod.nombre.toLowerCase().includes(busqueda) || 
    prod.categoria.toLowerCase().includes(busqueda)
  );

  const abrirZoom = (imagen) => setZoomImagen(imagen);
  const cerrarZoom = () => setZoomImagen(null);

  return (
    <div className="App">
      
    
      {/* 1. NAVBAR (Le pasamos la magia de la búsqueda) */}
      <Navbar alBuscar={manejarBusqueda} valorBusqueda={busqueda} />

      <main>
        {/* 2. PORTADA */}
        <Portada />

        {                   }
        <div className="bloque-central">
            <h2 className="titulo-principal-seccion">NUESTRO CATÁLOGO</h2>                              
        </div>

       {/* 4. RESULTADOS O CONTENIDO */}
        {busqueda !== "" ? (
          <section className="resultados-busqueda seccion-carrusel">
            
            {/* Título con el mismo estilo del carrusel */}
            <div className="cabecera-titulo" style={{ marginTop: '40px' }}>
                <h2 className="titulo-linea">Resultados para: "{busqueda}"</h2>
            </div>

            {/* ACÁ ESTÁ LA MAGIA: Usamos las clases de tu carrusel */}
            <div className="cuerpo-carrusel">
                <div className="riel-tarjetas">
                  {productosFiltrados.length > 0 ? (
                    productosFiltrados.map(prod => (
                      <div key={prod.id} className="tarjeta-mate">
                          <div className="foto-producto" onClick={() => abrirZoom(prod.imagen)}>
                              <img src={prod.imagen} alt={prod.nombre} loading="lazy" />
                          </div>
                          <div className="info-producto">
                              <h3>{prod.nombre}</h3>
                              <p className="precio">${prod.precio}</p>
                              {/* Tu botón de Instagram que ya tenías */}
                              <a href="https://www.instagram.com/matespirru/" target="_blank" rel="noreferrer" className="btn-comprar">
                                Ver en Instagram
                              </a>
                          </div>
                      </div>
                    ))
                  ) : (
                    <p style={{textAlign: 'center', width: '100%', padding: '40px', fontWeight: 'bold', color: '#1b5e20'}}>
                      No hay coincidencias. ¡Probá con otra palabra! 🧉
                    </p>
                  )}
                </div>
            </div>

          </section>
        ) : (
          <>

            <Categorias />

            <div id="mates-seccion">
                <Carrusel titulo="Mates Imperiales" categoria="imperial" productos={productos} alHacerClick={abrirZoom} />
                <Carrusel titulo="Mates Torpedos" categoria="torpedo" productos={productos} alHacerClick={abrirZoom} />
                <Carrusel titulo="Mates Camioneros" categoria="camionero" productos={productos} alHacerClick={abrirZoom} />
                <Carrusel titulo="Mates Criollos" categoria="criollo" productos={productos} alHacerClick={abrirZoom} />
            </div>

            <div id="accesorios-seccion">
                <div className="bloque-separador">
                    <h2 className="titulo-principal-seccion">EQUIPATE COMPLETO</h2>
                </div>
                <Carrusel titulo="Bombillas" categoria="bombilla" productos={productos} alHacerClick={abrirZoom} />
                <Carrusel titulo="Termos" categoria="termo" productos={productos} alHacerClick={abrirZoom} />
                <Carrusel titulo="Materas" categoria="matera" productos={productos} alHacerClick={abrirZoom} />
                <Carrusel titulo="Yerbas" categoria="yerba" productos={productos} alHacerClick={abrirZoom} />
            </div>

            <Beneficios />
          </>
        )}
      </main>

      {zoomImagen && <ModalZoom imagen={zoomImagen} cerrar={cerrarZoom} />}
      <Footer />
    </div>
  );
}

export default App;