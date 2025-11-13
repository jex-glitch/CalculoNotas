// ===================== ESPERA A QUE EL DOM ESTÉ LISTO =====================
document.addEventListener("DOMContentLoaded", () => {

    // ===================== REFERENCIAS GLOBALES =====================
    // Obtenemos el botón hamburguesa y el menú una sola vez
    const hamburger = document.getElementById("hamburger"); // Botón que abre/cierra el menú
    const navMenu = document.getElementById("nav-menu");    // Contenedor del menú desplegable

    // ===================== DESPLAZAMIENTO SUAVE =====================
    // Selecciona todos los enlaces internos que comienzan con #
    const links = document.querySelectorAll('a[href^="#"]');

    // Recorre cada enlace y agrega un evento click
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Evita que el enlace haga salto instantáneo

            // Obtiene el elemento de destino según el href del enlace
            const destino = document.querySelector(this.getAttribute("href"));
            if (destino) {
                // Desplaza la página suavemente hasta el elemento destino
                destino.scrollIntoView({ behavior: "smooth" });
            }

            // ===================== CIERRE DEL MENÚ AL HACER CLICK EN UN ENLACE =====================
            // Remueve clases para cerrar menú y overlay
            navMenu.classList.remove("active");              // Cierra el menú
            hamburger.classList.remove("active");            // Restaura el estado del botón hamburguesa
            document.body.classList.remove("menu-abierto");  // Quita overlay oscuro
        });
    });

    // ===================== MENÚ HAMBURGUESA =====================
    // Evento click en el botón hamburguesa
    hamburger.addEventListener("click", () => {
        // Alterna clases para abrir/cerrar menú y overlay
        hamburger.classList.toggle("active");             // Cambia el estado visual del botón (X o ≡)
        navMenu.classList.toggle("active");               // Muestra u oculta el menú
        document.body.classList.toggle("menu-abierto");   // Activa o desactiva el fondo oscuro
    });

    // ===================== CERRAR MENÚ AL HACER CLICK FUERA =====================
    document.addEventListener("click", (e) => {
        // Si el clic no fue en el botón hamburguesa ni dentro del menú
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            // Cierra menú y overlay
            navMenu.classList.remove("active");
            hamburger.classList.remove("active");
            document.body.classList.remove("menu-abierto");
        }
    });
});