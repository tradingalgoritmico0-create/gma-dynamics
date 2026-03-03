/**
 * GMA DYNAMICS - MAIN JAVASCRIPT
 * 
 * Este archivo contiene la lógica principal para inicializar
 * las animaciones y gestionar interacciones dinámicas del UI.
 */

document.addEventListener('DOMContentLoaded', () => {

  // 1. INICIALIZACIÓN DE AOS (ANIMATE ON SCROLL)
  // ---------------------------------------------------
  // Activa las animaciones de entrada para las secciones.
  // - duration: Duración de la animación en ms.
  // - once: La animación solo ocurre una vez.
  // - offset: Dispara la animación antes de que el elemento sea visible.
  try {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50, // Inicia la animación 50px antes de que el elemento entre en la vista
    });
  } catch (e) {
    console.error('Error al inicializar AOS:', e);
  }


  // 2. LÓGICA DE NAVBAR CON SCROLL
  // ---------------------------------------------------
  // Añade una clase al navbar cuando el usuario hace scroll para
  // aplicar un fondo más sólido y una sombra, mejorando la visibilidad.
  const navbar = document.querySelector('.glass-navbar');
  
  if (navbar) {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Ejecuta al cargar por si la página está recargada con scroll
  }

});
