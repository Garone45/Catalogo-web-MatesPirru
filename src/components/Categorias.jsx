import React from 'react';

function Categorias() {
  return (
    <section className="seccion" style={{ paddingTop: '0' }}>
        <div className="grilla-categorias">
            {/* Botón Mates -> Lleva a Imperiales */}
            <a href="#imperiales" className="tarjeta-categoria" style={{ backgroundImage: "url('img/mates-tarjeta.webp')" }}>
                <h3>Mates</h3>
            </a>

            {/* Botón Termos -> Lleva a Termos */}
            <a href="#seccion-termos" className="tarjeta-categoria" style={{ backgroundImage: "url('img/termo-tarjeta.webp')" }}>
                <h3>Termos</h3>
            </a>

            {/* Botón Materas -> Lleva a Materas */}
            <a href="#seccion-materas" className="tarjeta-categoria" style={{ backgroundImage: "url('img/tarjeta-matera.webp')" }}>
                <h3>Materas</h3>
            </a>

            {/* Botón Yerbas -> Lleva a Yerbas */}
            <a href="#seccion-yerbas" className="tarjeta-categoria" style={{ backgroundImage: "url('img/yerba-baldo.webp')" }}>
                <h3>Yerbas</h3>
            </a>
        </div>
    </section>
  );
}

export default Categorias;