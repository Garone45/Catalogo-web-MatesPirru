# 🧉 Catálogo Web - MatesPirru

> **🔴 Ver sitio online:** [Click aquí para visitar la web](https://garone45.github.io/Catalogo-web-MatesPirru/)

![Vista Previa del Sitio](./img/preview.png)

Web oficial de catálogo de productos para **MatesPirru**. 
Este proyecto es una solución digital para exhibir productos artesanales (Mates, Termos y Accesorios) permitiendo a los clientes visualizar el producto y concretar compras directamente vía WhatsApp.

## 🚀 Características Principales

* **Renderizado Dinámico:** Los productos no están escritos en el HTML, sino que se generan automáticamente desde una base de datos local.
* **Filtrado por Categorías:** Clasificación automática de productos (Imperiales, Torpedos, Camioneros).
* **Integración con WhatsApp:** Generación automática de links de compra con mensajes predefinidos según el producto seleccionado.
* **Diseño Responsive:** Adaptable a móviles y escritorio.
* **Interfaz Visual:** Diseño limpio enfocado en la fotografía del producto.

## 🛠️ Tecnologías Utilizadas

* **HTML5:** Estructura semántica del sitio.
* **CSS3:** Diseño, Flexbox/Grid y animaciones.
* **JavaScript (ES6):** Lógica de control, manipulación del DOM y asincronía.
* **JSON:** Almacenamiento y estructura de datos de los productos.

## ⚙️ Arquitectura y Funcionamiento Técnico

Este proyecto implementa una arquitectura que simula el consumo de una API REST real:

1.  **Fuente de Datos (JSON):**
    Los productos se almacenan en un archivo `productos.json` como texto plano, permitiendo una fácil actualización del stock sin tocar el código fuente.

2.  **Consumo de Datos (Fetch API):**
    Utilizando `fetch()`, la aplicación realiza una petición asíncrona para obtener los datos. Se utilizan **Promesas** (`.then`) para manejar la respuesta y parsear el JSON a objetos JavaScript manipulables.

3.  **Lógica Reutilizable (DRY):**
    Se implementó una función reutilizable `cargarCategoria()` que recibe los datos y el contenedor destino. Esto permite escalar el proyecto (agregar nuevas categorías como "Bombillas") con una sola línea de código, sin duplicar lógica.

4.  **Manipulación del DOM:**
    JavaScript recorre los arrays filtrados e inyecta el HTML de las tarjetas (`Template Strings`) dentro de los contenedores vacíos del HTML, aplicando estilos CSS automáticamente.

## 📦 Instalación y Uso

Debido a que el proyecto utiliza `fetch` para leer archivos locales, necesita ejecutarse sobre un servidor HTTP para evitar bloqueos de seguridad (CORS).

1.  Clonar el repositorio:
    ```bash
    git clone [https://github.com/Garone45/Catalogo-web-MatesPirru.git](https://github.com/Garone45/Catalogo-web-MatesPirru.git)
    ```
2.  Abrir la carpeta del proyecto en **Visual Studio Code**.
3.  Utilizar la extensión **Live Server** para lanzar la web:
    * Click derecho en `index.html` -> *Open with Live Server*.

## 👨‍💻 Autor

**Francisco Garone**
* Estudiante de Tecnicatura en Programación.
* [Perfil de GitHub](https://github.com/Garone45)