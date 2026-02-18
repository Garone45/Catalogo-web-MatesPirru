import React from 'react';

function Modal({ imagen, cerrar }) {
  if (!imagen) return null; // Si no hay imagen, no mostramos nada

  return (
    <div className="modal-overlay" onClick={cerrar}>
        <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>
            {/* Botón para cerrar */}
            <button className="btn-cerrar-modal" onClick={cerrar}>
                <i className="fa-solid fa-times"></i> X
            </button>
            
            {/* La imagen gigante */}
            <img src={imagen} alt="Zoom producto" />
        </div>
    </div>
  );
}

export default Modal;