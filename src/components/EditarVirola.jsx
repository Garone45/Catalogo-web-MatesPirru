import React, { useState, useEffect, useRef } from 'react';
import Draggable from 'react-draggable';
import { libreriaDisenos } from "./disenosGrabados";

// Componente auxiliar para envolver cada elemento arrastrable con su ref y callbacks de arrastre
const ItemArrastrable = ({ el, onEliminar, onDragStart, onDragStop }) => {
  const itemRef = useRef(null);

  return (
    <Draggable 
      nodeRef={itemRef} 
      bounds="parent" 
      cancel=".btn-eliminar-sticker"
      grid={[5, 5]} // Salto magnético sutil cada 5px para facilitar el centrado
      onStart={onDragStart}
      onStop={onDragStop}
    >
      <div ref={itemRef} className="sticker-grabado">
        {el.url ? (
          <img src={el.url} alt={el.nombre || "grabado"} />
        ) : (
          <div className="icono-vectorial">
            {el.icono}
          </div>
        )}
        <button 
          type="button"
          className="btn-eliminar-sticker"
          onClick={(e) => {
            e.stopPropagation();
            onEliminar(el.id);
          }}
          onTouchEnd={(e) => {
            e.stopPropagation();
            onEliminar(el.id);
          }}
          title="Eliminar"
        >
          ×
        </button>
      </div>
    </Draggable>
  );
};

const EditorVirola = () => {
  const [elementos, setElementos] = useState([]);
  const [menuVisible, setMenuVisible] = useState(false);
  const [busqueda, setBusqueda] = useState('');
  const [estaArrastrando, setEstaArrastrando] = useState(false); // Estado para encender/apagar guías
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
      nombre: diseno.nombre,
      url: diseno.url,     
      icono: diseno.icono, 
      x: 0, 
      y: 0 
    };
    setElementos([...elementos, nuevoElemento]);
  };

  const eliminarElemento = (id) => {
    setElementos(elementos.filter((item) => item.id !== id));
  };

  const limpiarLienzo = () => setElementos([]);

  return (
    <section className="editor-seccion" ref={seccionRef}>
      <div className="editor-layout">
        
        {/* COLUMNA / BANDEJA: MENÚ DE DISEÑOS */}
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
              {libreriaDisenos.map((categoria) => {
                const itemsFiltrados = categoria.items.filter((item) => 
                  item.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
                  (item.tags && item.tags.some((tag) => tag.toLowerCase().includes(busqueda.toLowerCase())))
                );

                if (itemsFiltrados.length === 0) return null;

                return (
                  <div key={categoria.categoria} className="seccion-categoria">
                    <h4>{categoria.categoria}</h4>
                    <div className="iconos-grid">
                      {itemsFiltrados.map((item) => (
                        <button 
                          key={item.id} 
                          type="button"
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
              <button type="button" onClick={limpiarLienzo} className="btn-limpiar">
                Limpiar
              </button>
              <button type="button" className="btn-whatsapp-envio">
                Guardar y Pedir
              </button>
            </div>
          </div>
        </aside>

        {/* COLUMNA: LIENZO DE LA VIROLA */}
        <div className="lienzo-contenedor">
          <div className="editor-header">
            <h2>Personalizá tu Grabado</h2>
            <p>Elegí un diseño y acomodalo en la virola</p>
          </div>

          <div className="lienzo-virola">
            {/* LÍNEAS GUÍA DE CENTRADO (ESTILO INSTAGRAM) */}
            <div className={`guias-centrado ${estaArrastrando ? 'activas' : ''}`}>
              <span className="guia-eje vertical" />
              <span className="guia-eje horizontal" />
            </div>

            {elementos.map((el) => (
              <ItemArrastrable 
                key={el.id} 
                el={el} 
                onEliminar={eliminarElemento}
                onDragStart={() => setEstaArrastrando(true)}
                onDragStop={() => setEstaArrastrando(false)}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default EditorVirola;