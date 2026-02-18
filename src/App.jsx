import { useState, useEffect } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Portada from './components/Portada';
import Categorias from './components/Categorias'; 
import Buscador from './components/Buscador';     
import SeccionCategoria from './components/SeccionCategoria';
import Beneficios from './components/Beneficios';
import Footer from './components/Footer';
import TarjetaMate from './components/TarjetaMate';
import Modal from './components/Modal'; // <--- IMPORTAMOS EL MODAL

function App() {
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [cargando, setCargando] = useState(true);

  // 1. ESTADO PARA LA IMAGEN SELECCIONADA
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

  useEffect(() => {
    fetch('./productos.json')
      .then(res => res.json())
      .then(data => {
        setProductos(data);
        setCargando(false);
      })
      .catch(error => { console.error(error); setCargando(false); });
  }, []);

  // Función para abrir el modal
  const abrirModal = (imagen) => {
    setImagenSeleccionada(imagen);
  };

  // Función para cerrar el modal
  const cerrarModal = () => {
    setImagenSeleccionada(null);
  };

  const productosFiltrados = productos.filter(producto => 
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  if (cargando) {
    return <div style={{padding: '50px', textAlign: 'center'}}>Cargando...</div>;
  }

  return (
    <div>
      <Navbar />
      <Portada />
      <div style={{ height: '100px', width: '100%', clear: 'both' }}></div>
      <Categorias />

      <section className="seccion">
        <h2 style={{textAlign: 'center', marginBottom: '20px'}}>Nuestro Catálogo</h2>
        <Buscador busqueda={busqueda} setBusqueda={setBusqueda} />

        {busqueda === '' ? (
          <>
             {/* PASAMOS "abrirModal" A TODAS LAS SECCIONES */}
             <SeccionCategoria titulo="Línea Imperiales" productos={productos} filtro="imperial" id="imperiales" abrirModal={abrirModal} />
             <SeccionCategoria titulo="Línea Torpedos" productos={productos} filtro="torpedo" id="torpedos" abrirModal={abrirModal} />
             <SeccionCategoria titulo="Línea Camioneros" productos={productos} filtro="camionero" id="camioneros" abrirModal={abrirModal} />
             <SeccionCategoria titulo="Línea Criolla" productos={productos} filtro="criollo" id="criollos" abrirModal={abrirModal} />
             
             <h2 id="seccion-accesorios" style={{marginTop: '60px', textAlign:'center'}}>Equipate Completo</h2>
             <SeccionCategoria titulo="Materas de Cuero" productos={productos} filtro="matera" id="seccion-materas" abrirModal={abrirModal}/>
             <SeccionCategoria titulo="Termos" productos={productos} filtro="termo" id="seccion-termos" abrirModal={abrirModal}/>
             <SeccionCategoria titulo="Yerbas" productos={productos} filtro="yerba" id="seccion-yerbas" abrirModal={abrirModal}/>
          </>
        ) : (
          <div className="resultados-busqueda">
             <h3 style={{marginLeft: '20px', color: '#666'}}>Resultados para: "{busqueda}"</h3>
             <div className="grilla-mates" style={{flexWrap: 'wrap', justifyContent: 'center'}}>
                {productosFiltrados.map(producto => (
                    <TarjetaMate 
                      key={producto.id}
                      nombre={producto.nombre}
                      precio={producto.precio}
                      imagen={producto.imagen}
                      alHacerClick={abrirModal} // TAMBIÉN ACÁ EN EL BUSCADOR
                    />
                ))}
             </div>
          </div>
        )}
      </section>

      <Beneficios />
      <Footer />

      {/* 3. AGREGAMOS EL MODAL AL FINAL DE TODO */}
      {/* Solo se muestra si "imagenSeleccionada" tiene algo */}
      <Modal imagen={imagenSeleccionada} cerrar={cerrarModal} />
      
    </div>
  );
}

export default App;