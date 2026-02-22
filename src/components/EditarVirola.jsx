import React, { useState, useEffect, useRef } from 'react';
import Draggable from 'react-draggable';
import { libreriaDisenos } from "./disenosGrabados";

const EditorVirola = () => {
  const [elementos, setElementos] = useState([]);
  const [menuVisible, setMenuVisible] = useState(false);
  const [busqueda, setBusqueda] = useState('');
  const seccionRef = useRef(null);

  useEffect(() => {
    const observador = new IntersectionObserver(
      (entradas) => {
        if (entradas[0].isIntersecting) setMenuVisible(true);
      },
      { threshold: 0.2 }
    );
    if (seccionRef.current) observador.observe(seccionRef.current);
    return () => observador.disconnect();
  }, []);

  const agregarElemento = (diseno) => {
    const nuevoElemento = { 
      id: Date.now(), 
      url: diseno.url,     
      icono: diseno.icono, 
      x: 0, 
      y: 0 
    };
    setElementos([...elementos, nuevoElemento]);
  };

  const limpiarLienzo = () => setElementos([]);

  return (
    <section className="editor-seccion" ref={seccionRef}>
      <div className="editor-layout">
        
        <aside className={`menu-lateral ${menuVisible ? 'visible' : ''}`}>
          <div className="menu-contenido">
            <h3>Diseños</h3>
            
            <div className="buscador-canva">
              <input 
                type="text" 
                placeholder="Buscar diseños..." 
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
              />
            </div>
            
            <div className="grilla-libreria">
              {/* MAPEAMOS LAS CATEGORÍAS */}
              {libreriaDisenos.map((categoria) => {
                // Filtramos los items de esta categoría
                const itemsFiltrados = categoria.items.filter(item => 
                  item.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
                  (item.tags && item.tags.some(tag => tag.toLowerCase().includes(busqueda.toLowerCase())))
                );

                // Si no hay coincidencias en esta categoría, no mostramos el título ni la grilla
                if (itemsFiltrados.length === 0) return null;

                return (
                  <div key={categoria.categoria} className="seccion-categoria">
                    <h4>{categoria.categoria}</h4>
                    <div className="iconos-grid">
                      {itemsFiltrados.map((item) => (
                        <button 
                          key={item.id} 
                          onClick={() => agregarElemento(item)} 
                          className="btn-item-icon"
                          title={item.nombre}
                        >
                          {item.url ? <img src={item.url} alt={item.nombre} /> : item.icono}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="acciones-finales">
              <button onClick={limpiarLienzo} className="btn-limpiar">Limpiar</button>
              <button className="btn-whatsapp-envio">Guardar y Pedir</button>
            </div>
          </div>
        </aside>

        <div className="lienzo-contenedor">
          <div className="editor-header">
            <h2>Personalizá tu Grabado</h2>
            <p>Elegí un diseño y acomodalo en la virola</p>
          </div>

          <div className="lienzo-virola">
            {elementos.map((el) => (
              <Draggable key={el.id} bounds="parent">
                <div className="sticker-grabado">
                  {el.url ? (
                    <img src={el.url} alt="grabado" />
                  ) : (
                    <div className="icono-vectorial" style={{ fontSize: '40px', color: '#333' }}>
                      {el.icono}
                    </div>
                  )}
                  <button className="btn-eliminar" onClick={() => setElementos(elementos.filter(item => item.id !== el.id))}>×</button>
                </div>
              </Draggable>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default EditorVirola;