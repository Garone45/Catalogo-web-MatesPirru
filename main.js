// 1. Buscamos el contenedor vacío que acabamos de crear
const contenedorImperiales = document.getElementById('grilla-imperiales');
const contenedorTorpedos = document.getElementById('grilla-torpedos'); // <--- NUEVO
const contenedorCamioneros = document.getElementById('grilla-camioneros'); // <--- NUEVO

// 2. Leemos el archivo JSON
fetch('./productos.json')
    .then(respuesta => respuesta.json())
    .then(datos => {

        // 3. Filtramos solo los que sean categoria 'imperial'
        const imperiales = datos.filter(producto => producto.categoria === 'imperial');

        // 4. Recorremos y dibujamos
        imperiales.forEach(producto => {

            // Truco: Formatear el precio con el punto de mil (ej: 35.000)
            const precioFormateado = producto.precio.toLocaleString('es-AR');

            // Armamos el HTML respetando TUS clases exactas
            const tarjetaHTML = `
                <div class="tarjeta-mate">
                    <div class="foto-producto">
                        <img src="${producto.imagen}" alt="${producto.nombre}">
                    </div>
                    <div class="info-producto">
                        <h3>${producto.nombre}</h3>
                        <span class="precio">$${precioFormateado}</span>
                        
                        <a href="https://wa.me/5491138517333?text=Hola%20MatesPirru,%20me%20interesa%20el%20${producto.nombre}"
                           class="btn-comprar" target="_blank">
                           <i class="fa-brands fa-whatsapp"></i> Comprar
                        </a>
                    </div>
                </div>
            `;

            // 5. Inyectamos en el HTML
            contenedorImperiales.innerHTML += tarjetaHTML;
        });

        const torpedos = datos.filter(producto => producto.categoria === 'torpedo');

        torpedos.forEach(producto => {
            const precioFormateado = producto.precio.toLocaleString('es-AR');

            // Usamos la MISMA estructura de tarjeta
            const tarjetaHTML = `
                <div class="tarjeta-mate">
                    <div class="foto-producto">
                        <img src="${producto.imagen}" alt="${producto.nombre}">
                    </div>
                    <div class="info-producto">
                        <h3>${producto.nombre}</h3>
                        <span class="precio">$${precioFormateado}</span>
                        <a href="https://wa.me/5491138517333?text=Hola%20MatesPirru,%20me%20interesa%20el%20${producto.nombre}" class="btn-comprar" target="_blank"><i class="fa-brands fa-whatsapp"></i> Comprar</a>
                    </div>
                </div>`;

            // ¡OJO ACÁ! Lo metemos en el contenedor de TORPEDOS
            contenedorTorpedos.innerHTML += tarjetaHTML;
        });

        const camioneros = datos.filter(producto => producto.categoria === 'camionero');

        camioneros.forEach(producto => {
            const precioFormateado = producto.precio.toLocaleString('es-AR');

            const tarjetaHTML = `
                <div class="tarjeta-mate">
                    <div class="foto-producto">
                        <img src="${producto.imagen}" alt="${producto.nombre}">
                    </div>
                    <div class="info-producto">
                        <h3>${producto.nombre}</h3>
                        <span class="precio">$${precioFormateado}</span>
                        <a href="https://wa.me/5491138517333?text=Hola%20MatesPirru,%20me%20interesa%20el%20${producto.nombre}" class="btn-comprar" target="_blank"><i class="fa-brands fa-whatsapp"></i> Comprar</a>
                    </div>
                </div>`;

            // Inyectamos en el contenedor de CAMIONEROS
            contenedorCamioneros.innerHTML += tarjetaHTML;
        });

    })
    .catch(error => console.error("Error cargando productos:", error));
