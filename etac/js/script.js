// ========== js/script.js ==========

// 1. ACORDEÓN FAQ
document.addEventListener('DOMContentLoaded', function () {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    header.addEventListener('click', function () {
      // Cerrar otros (opcional para mantener solo uno abierto)
      accordionItems.forEach(other => {
        if (other !== item && other.classList.contains('active')) {
          other.classList.remove('active');
        }
      });
      item.classList.toggle('active');
    });
  });

  // 2. AÑO AUTOMÁTICO EN FOOTER
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 3. SCROLL SUAVE PARA NAVEGACIÓN (redundante con css scroll-behavior, pero para enlaces antiguos)
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // 4. PEQUEÑA ANIMACIÓN DE STICKY HEADER (cambio sutil al hacer scroll)
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.style.backgroundColor = '#fffffff2';
      header.style.backdropFilter = 'blur(4px)';
    } else {
      header.style.backgroundColor = '#ffffff';
      header.style.backdropFilter = 'none';
    }
  });

  // 5. PREVENIR ENVÍO REAL DEL FORMULARIO (solo demostración)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Gracias por contactarnos. Pronto te responderemos (demo).');
      this.reset();
    });
  }
});