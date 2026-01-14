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

// --- EJECUCIÓN PRINCIPAL (Entry Point) ---

// 1. SOLICITUD HTTP (Fetch API)
// Inicia una petición asíncrona GET para recuperar el recurso JSON local.
fetch('./productos.json')
    .then(respuesta => respuesta.json()) // Transforma el stream de datos a Objeto JSON nativo.
    .then(datos => {
        // El código dentro de este bloque se ejecuta SOLO cuando los datos llegaron correctamente.
        
        // 2. LLAMADAS A LA FUNCIÓN (Instanciación)
        // Se ejecuta la lógica definida arriba para cada segmento del catálogo.
        cargarCategoria(datos, 'imperial', 'grilla-imperiales');
        cargarCategoria(datos, 'torpedo', 'grilla-torpedos');
        cargarCategoria(datos, 'camionero', 'grilla-camioneros');
    })
    .catch(error => console.error("Error en la petición fetch:", error)); // Captura de errores de red o parsing.