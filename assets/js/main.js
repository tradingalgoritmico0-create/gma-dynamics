document.addEventListener('DOMContentLoaded', () => { 
  try { 
    AOS.init({ 
      duration: 800, 
      once: true, 
      offset: 50, 
    }); 
  } catch (e) { 
    console.error('Error al inicializar AOS:', e); 
  } 

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
    handleScroll(); 
  } 
}); 

// FIX CRÍTICO: Recalcular posiciones de AOS después de cargar imágenes 
window.addEventListener('load', () => { 
  AOS.refresh(); 
}); 
