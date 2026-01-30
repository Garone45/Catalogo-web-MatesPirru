// --- VARIABLES GLOBALES ---
let inventarioGlobal = []; 
const inputBuscador = document.getElementById('input-buscador');

// --- FUNCIONES ---

/**
 * Función: cargarCategoria
 * Dibuja los productos de una categoría específica en su contenedor.
 */
function cargarCategoria(todosLosMates, categoriaAFiltrar, idDelContenedor) {       
    const contenedor = document.getElementById(idDelContenedor);
    
    // Si no existe el contenedor en el HTML, salimos para no dar error
    if (!contenedor) return; 

    const matesFiltrados = todosLosMates.filter(mate => mate.categoria === categoriaAFiltrar);

    matesFiltrados.forEach(mate => {
        const precioLindo = mate.precio.toLocaleString('es-AR');
        const tarjeta = `
            <div class="tarjeta-mate">
                <div class="foto-producto">
                    <img src="${mate.imagen}" alt="${mate.nombre}" loading="lazy">
                </div>
                <div class="info-producto">
                    <h3>${mate.nombre}</h3>
                    <span class="precio">$${precioLindo}</span>
                    <a href="https://wa.me/5491138517333?text=Me%20interesa%20${mate.nombre}" 
                       class="btn-comprar" target="_blank">
                       Comprar
                    </a>
                </div>
            </div>`;
        contenedor.innerHTML += tarjeta;
    });
}

/** * Función: renderizarBusqueda
 * Muestra los resultados de la búsqueda y limpia TODAS las categorías.
 */
function renderizarBusqueda(listaDeResultados) {
    // 1. LIMPIEZA TOTAL: Borramos el contenido de TODAS las grillas
    const idsLimpieza = [
        'grilla-imperiales', 'grilla-torpedos', 'grilla-camioneros', 
        'grilla-criollos', 'grilla-materas', 'grilla-termos', 'grilla-yerbas'
    ];

    idsLimpieza.forEach(id => {
        const div = document.getElementById(id);
        if(div) div.innerHTML = "";
    });
    
    // 2. Si no hay resultados, cortamos acá
    if(listaDeResultados.length === 0) return;

    // 3. Usamos la primera grilla para mostrar los resultados
    const zonaDeResultados = document.getElementById('grilla-imperiales'); 

    listaDeResultados.forEach(mate => {
        const precioLindo = mate.precio.toLocaleString('es-AR');
        const tarjeta = `
            <div class="tarjeta-mate">
                <div class="foto-producto">
                    <img src="${mate.imagen}" alt="${mate.nombre}">
                </div>
                <div class="info-producto">
                    <h3>${mate.nombre}</h3>
                    <span class="precio">$${precioLindo}</span>
                    <a href="https://wa.me/5491138517333?text=Hola,%20busqué%20y%20encontré%20el%20${mate.nombre}" class="btn-comprar" target="_blank">Comprar</a>
                </div>
            </div>`;
        zonaDeResultados.innerHTML += tarjeta;
    });
}


// --- EJECUCIÓN PRINCIPAL (Entry Point) ---

fetch('./productos.json')
    .then(respuesta => respuesta.json())
    .then(datos => {
        // Guardamos todo en la variable global
        inventarioGlobal = datos;

        // CARGA INICIAL DE TODAS LAS CATEGORÍAS
        cargarCategoria(datos, 'imperial', 'grilla-imperiales');
        cargarCategoria(datos, 'torpedo', 'grilla-torpedos');
        cargarCategoria(datos, 'camionero', 'grilla-camioneros');
        // Nuevas categorías:
        cargarCategoria(datos, 'criollo', 'grilla-criollos');
        cargarCategoria(datos, 'matera', 'grilla-materas');
        cargarCategoria(datos, 'termo', 'grilla-termos');
        cargarCategoria(datos, 'yerba', 'grilla-yerbas');
    })
    .catch(error => console.error("Error cargando productos:", error));


// --- LÓGICA DEL BUSCADOR ---

if(inputBuscador) {
    inputBuscador.addEventListener('input', (e) => {
        const loQueEscribio = e.target.value.toLowerCase().trim();

        // CASO 1: Si borró todo, RECARGAMOS todo el catálogo
        if(loQueEscribio === "") {
            // Limpiamos visualmente primero
            const idsLimpieza = ['grilla-imperiales', 'grilla-torpedos', 'grilla-camioneros', 'grilla-criollos', 'grilla-materas', 'grilla-termos', 'grilla-yerbas'];
            idsLimpieza.forEach(id => {
                const div = document.getElementById(id);
                if(div) div.innerHTML = "";
            });

            // Volvemos a llenar todo
            cargarCategoria(inventarioGlobal, 'imperial', 'grilla-imperiales');
            cargarCategoria(inventarioGlobal, 'torpedo', 'grilla-torpedos');
            cargarCategoria(inventarioGlobal, 'camionero', 'grilla-camioneros');
            cargarCategoria(inventarioGlobal, 'criollo', 'grilla-criollos');
            cargarCategoria(inventarioGlobal, 'matera', 'grilla-materas');
            cargarCategoria(inventarioGlobal, 'termo', 'grilla-termos');
            cargarCategoria(inventarioGlobal, 'yerba', 'grilla-yerbas');
            return;
        }

        // CASO 2: El usuario está escribiendo -> Buscamos
        const palabrasBusqueda = loQueEscribio.split(" ");
        
        const resultados = inventarioGlobal.filter(producto => {
            const nombreProducto = producto.nombre.toLowerCase();
            return palabrasBusqueda.every(palabra => nombreProducto.includes(palabra));
        });

        renderizarBusqueda(resultados);
    });
}


// --- LÓGICA DEL CARRUSEL HERO AUTOMÁTICO ---

const slides = document.querySelectorAll('.slide');

if (slides.length > 0) {
    let indiceActual = 0; 
    const tiempoEntreFotos = 5000; 

    function siguienteSlide() {
        slides[indiceActual].classList.remove('activa');
        indiceActual = (indiceActual + 1) % slides.length;
        slides[indiceActual].classList.add('activa');
    }

    setInterval(siguienteSlide, tiempoEntreFotos);
}
// --- LÓGICA DE LAS FLECHAS DEL CARRUSEL ---

// 1. Buscamos todos los botones de flecha
const botonesFlecha = document.querySelectorAll('.btn-flecha');

botonesFlecha.forEach(boton => {
    boton.addEventListener('click', () => {
        // A. Identificamos si es flecha derecha o izquierda
        const esDerecha = boton.classList.contains('flecha-der');
        
        // B. Buscamos la grilla que está AL LADO del botón (su hermana)
        const contenedorPadre = boton.parentElement;
        const grilla = contenedorPadre.querySelector('.grilla-mates');
        
        // C. Definimos cuánto mover (el ancho de una tarjeta aprox + espacio)
        const anchoDesplazamiento = 300; 
        
        // D. Movemos el scroll
        if (esDerecha) {
            grilla.scrollBy({ left: anchoDesplazamiento, behavior: 'smooth' });
        } else {
            grilla.scrollBy({ left: -anchoDesplazamiento, behavior: 'smooth' });
        }
    });
});