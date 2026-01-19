// --- VARIABLES GLOBALES ---
// 1. NUEVO: Creamos una variable vacía para guardar los datos y usarlos en el buscador
let inventarioGlobal = [];

const contenedorBuscador = document.getElementById('resultados-busqueda'); // (Asegurate de crear este div en tu HTML)
const inputBuscador = document.getElementById('input-buscador');
/**
 * Función: cargarCategoria
 * Propósito: Abstraer la lógica de renderizado para reutilizarla con distintos datasets.
 * Parámetros:
 * - todosLosMates: Array de objetos (origen de datos).
 * - categoriaAFiltrar: String para coincidencia estricta en el filtro.
 * - idDelContenedor: String del ID en el HTML donde se inyectará el resultado.
 */
function cargarCategoria(todosLosMates, categoriaAFiltrar, idDelContenedor) {

    // 1. SELECCIÓN DEL NODO DOM
    // Crea una referencia en memoria al elemento HTML específico.
    const contenedor = document.getElementById(idDelContenedor);

    // 2. VALIDACIÓN DE EXISTENCIA
    // Si el ID no existe en el HTML, retorna undefined para evitar romper la ejecución (Error Handling).
    if (!contenedor) return;

    // 3. FILTRADO DE DATOS (Array Method)
    // Crea un nuevo array ('matesFiltrados') que contiene solo los objetos 
    // cuya propiedad 'categoria' coincide estrictamente (===) con el parámetro solicitado.
    const matesFiltrados = todosLosMates.filter(mate => mate.categoria === categoriaAFiltrar);

    // 4. ITERACIÓN Y RENDERIZADO
    // Ejecuta una función por cada elemento del array filtrado.
    matesFiltrados.forEach(mate => {

        // Formateo de datos numéricos a String con formato local (moneda).
        const precioLindo = mate.precio.toLocaleString('es-AR');

        // 5. CONSTRUCCIÓN DEL DOM VIRTUAL (Template String)
        // Se utilizan Backticks (``) para permitir interpolación de variables (${}).
        // Se definen las clases CSS (.tarjeta-mate) que el navegador pintará al renderizar.
        const tarjeta = `
            <div class="tarjeta-mate">
                <div class="foto-producto">
                    <img src="${mate.imagen}" alt="${mate.nombre}">
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

        // 6. INYECCIÓN AL DOM (Parsing & Repaint)
        // Toma el String HTML generado y lo inserta como hijo del nodo contenedor.
        // El navegador parsea las etiquetas y aplica los estilos CSS inmediatamente.
        contenedor.innerHTML += tarjeta;
    });
}

/** * 2.  Función renderizarBusqueda
 * Propósito: Mostrar los resultados del buscador. 
 * Diferencia: Esta NO filtra por categoría, dibuja todo lo que recibe.
 */
function renderizarBusqueda(listaDeResultados) {
    // A. Limpiamos el contenedor de búsqueda antes de dibujar
    const contenedorResultados = document.getElementById('contenedor-productos'); // OJO: Usamos el contenedor principal o uno nuevo

    // B. Estrategia de UX: 
    // Si hay búsqueda, limpiamos TODO el HTML de productos para mostrar solo resultados
    // Si no hay búsqueda, tendríamos que volver a cargar las categorías (más complejo)
    // Para simplificar: Vamos a usar un contenedor especial para resultados o limpiar los otros.

    // Vamos a hacerlo simple: Si busco, borro las grillas de categorías y muestro resultados.
    document.getElementById('grilla-imperiales').innerHTML = "";
    document.getElementById('grilla-torpedos').innerHTML = "";
    document.getElementById('grilla-camioneros').innerHTML = "";

    // Si no hay resultados, mostramos mensaje
    if (listaDeResultados.length === 0) {
        // Podrías mostrar un mensaje de error en algún div
        return;
    }

    // Usamos el ID de alguna grilla para mostrar los resultados (o un div genérico)
    const zonaDeResultados = document.getElementById('grilla-imperiales'); // Reusamos este espacio por ahora

    listaDeResultados.forEach(mate => {
        // (ACÁ COPIAMOS TU MISMA LÓGICA DE TARJETA) - PRINCIPIO DRY (podríamos optimizarlo después)
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

// 1. SOLICITUD HTTP (Fetch API)
// Inicia una petición asíncrona GET para recuperar el recurso JSON local.
fetch('./productos.json')
    .then(respuesta => respuesta.json())
    .then(datos => {

        // 3. NUEVO: Guardamos los datos en la variable global
        inventarioGlobal = datos;

        // Ejecutamos la carga inicial (lo que ya tenías)
        cargarCategoria(datos, 'imperial', 'grilla-imperiales');
        cargarCategoria(datos, 'torpedo', 'grilla-torpedos');
        cargarCategoria(datos, 'camionero', 'grilla-camioneros');
    })
    .catch(error => console.error("Error:", error));

// 4. NUEVO: EL EVENT LISTENER DEL BUSCADOR
// Esto va FUERA del fetch, porque el input ya existe en el HTML
if (inputBuscador) {
    inputBuscador.addEventListener('input', (e) => {
        const loQueEscribio = e.target.value.toLowerCase();

        // Si borró todo, recargamos la página o volvemos a llamar a las funciones originales
        if (loQueEscribio === "") {
            document.getElementById('grilla-imperiales').innerHTML = "";
            document.getElementById('grilla-torpedos').innerHTML = "";
            document.getElementById('grilla-camioneros').innerHTML = "";

            cargarCategoria(inventarioGlobal, 'imperial', 'grilla-imperiales');
            cargarCategoria(inventarioGlobal, 'torpedo', 'grilla-torpedos');
            cargarCategoria(inventarioGlobal, 'camionero', 'grilla-camioneros');
            return;
        }

        // CASO 2: El usuario está escribiendo
        const textoUsuario = e.target.value.toLowerCase().trim(); // El .trim() saca espacios al final

        // 1. Convertimos lo que escribiste en un Array de palabras
        // Si escribís "imperial alpaca", esto crea: ["imperial", "alpaca"]
        const palabrasBusqueda = textoUsuario.split(" ");

        const resultados = inventarioGlobal.filter(producto => {
            const nombreProducto = producto.nombre.toLowerCase();

            // 2. La Magia: Chequeamos que CADA palabra (every) esté en el nombre
            return palabrasBusqueda.every(palabra => nombreProducto.includes(palabra));
        });

        renderizarBusqueda(resultados);
    });
}