// ========== js/script.js ==========
document.addEventListener('DOMContentLoaded', function () {
  // 1. ACORDEÓN FAQ
  const accordionItems = document.querySelectorAll('.accordion-item');
  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    header.addEventListener('click', function () {
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
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  // 3. SCROLL SUAVE PARA NAVEGACIÓN (refuerzo)
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // 4. STICKY HEADER CON EFECTO SUTIL
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

  // 5. FORMULARIO (solo demo)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Gracias por contactarnos. Pronto te responderemos (demo).');
      this.reset();
    });
  }
});
