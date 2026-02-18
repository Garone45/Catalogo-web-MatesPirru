import React from 'react';

function Categorias() {
  return (
    <section className="seccion-categorias-top">
      <div className="grilla-categorias">
        
        {/* Mates */}
        <a href="#imperiales" className="tarjeta-categoria">
          <div className="contenedor-img-cat">
            <img src="img/mates-tarjeta.webp" alt="Mates" />
          </div>
          <h3>Mates</h3>
        </a>

        {/* Termos */}
        <a href="#seccion-termos" className="tarjeta-categoria">
          <div className="contenedor-img-cat">
            <img src="img/termo-tarjeta.webp" alt="Termos" />
          </div>
          <h3>Termos</h3>
        </a>

        {/* Materas */}
        <a href="#seccion-materas" className="tarjeta-categoria">
          <div className="contenedor-img-cat">
            <img src="img/tarjeta-matera.webp" alt="Materas" />
          </div>
          <h3>Materas</h3>
        </a>

        {/* Yerbas */}
        <a href="#seccion-yerbas" className="tarjeta-categoria">
          <div className="contenedor-img-cat">
            <img src="img/yerba-baldo.webp" alt="Yerbas" />
          </div>
          <h3>Yerbas</h3>
        </a>

      </div>
    </section>
  );
}

export default Categorias;