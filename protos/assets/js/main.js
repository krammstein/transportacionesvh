/**
 * Transportaciones Vázquez Heredia (VH)
 * Lógica de Interacción, Cotizador Dinámico, Lightbox y Navegación Móvil
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Navegación Móvil (Hamburger)
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const isExpanded = navMenu.classList.contains('active');
      hamburger.setAttribute('aria-expanded', isExpanded);
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  // 2. Lightbox para Galería
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');

  if (lightbox && lightboxImg) {
    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        const fullImg = item.getAttribute('data-full');
        const caption = item.getAttribute('data-caption') || '';
        lightboxImg.src = fullImg;
        lightboxCaption.textContent = caption;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    const closeLightbox = () => {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
      lightboxImg.src = '';
    };

    if (lightboxClose) {
      lightboxClose.addEventListener('click', closeLightbox);
    }

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
      }
    });
  }

  // 3. Preselección de servicio desde tarjetas
  const serviceButtons = document.querySelectorAll('.service-btn-select');
  const serviceSelect = document.getElementById('quoteService');
  const quoteSection = document.getElementById('cotizar');

  serviceButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetService = btn.getAttribute('data-service');
      if (serviceSelect && targetService) {
        serviceSelect.value = targetService;
      }
      if (quoteSection) {
        quoteSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // 4. Cotizador y Generador Inteligente de WhatsApp / Email
  const quoteForm = document.getElementById('quoteForm');
  const btnWhatsApp = document.getElementById('btnSendWhatsApp');
  const whatsappNumber = '528332970114'; // Número oficial VH

  const getFormPayload = () => {
    const nombre = document.getElementById('quoteName')?.value.trim() || 'No especificado';
    const empresa = document.getElementById('quoteCompany')?.value.trim() || 'Particular / No especificado';
    const telefono = document.getElementById('quotePhone')?.value.trim() || 'No especificado';
    const servicio = document.getElementById('quoteService')?.value || 'Transporte General';
    const origen = document.getElementById('quoteOrigin')?.value.trim() || 'Altamira, TAM';
    const destino = document.getElementById('quoteDestination')?.value.trim() || 'Por definir';
    const detalles = document.getElementById('quoteNotes')?.value.trim() || 'Sin comentarios adicionales';

    return { nombre, empresa, telefono, servicio, origen, destino, detalles };
  };

  if (btnWhatsApp) {
    btnWhatsApp.addEventListener('click', (e) => {
      e.preventDefault();
      const data = getFormPayload();

      if (!document.getElementById('quoteName')?.value) {
        alert('Por favor, ingresa al menos tu nombre para brindarte atención personalizada.');
        document.getElementById('quoteName')?.focus();
        return;
      }

      const messageText = 
`*SOLICITUD DE COTIZACIÓN WEB — VH*
----------------------------------------
*Cliente:* ${data.nombre}
*Empresa:* ${data.empresa}
*Teléfono:* ${data.telefono}
*Servicio:* ${data.servicio}
*Ruta:* ${data.origen} ➔ ${data.destino}
*Detalles de Carga:* ${data.detalles}
----------------------------------------
_Enviado desde el portal de Transportaciones Vázquez Heredia_`;

      const encodedUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageText)}`;
      window.open(encodedUrl, '_blank');
    });
  }

  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = getFormPayload();

      const subject = encodeURIComponent(`Solicitud de Cotización: ${data.servicio} - ${data.empresa}`);
      const body = encodeURIComponent(
        `Estimado equipo de Transportaciones Vázquez Heredia,\n\n` +
        `Solicito cotización con los siguientes datos:\n\n` +
        `Nombre: ${data.nombre}\n` +
        `Empresa: ${data.empresa}\n` +
        `Teléfono: ${data.telefono}\n` +
        `Tipo de Servicio: ${data.servicio}\n` +
        `Ruta Solicitada: ${data.origen} hacia ${data.destino}\n` +
        `Detalles adicionales: ${data.detalles}\n\n` +
        `Agradezco su pronta atención.`
      );

      window.location.href = `mailto:atencionaclientes@transportacionesvh.com?subject=${subject}&body=${body}`;
    });
  }

  // 5. Animación simple de contadores numéricos al entrar en viewport
  const counters = document.querySelectorAll('.stat-number');
  let animated = false;

  const runCounters = () => {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      if (!target) return;
      let count = 0;
      const speed = target / 30;

      const updateCount = () => {
        count += speed;
        if (count < target) {
          counter.innerText = Math.ceil(count).toLocaleString();
          requestAnimationFrame(updateCount);
        } else {
          counter.innerText = target.toLocaleString();
        }
      };
      updateCount();
    });
  };

  const checkScroll = () => {
    const statsSection = document.querySelector('.hero-stats-grid');
    if (statsSection && !animated) {
      const rect = statsSection.getBoundingClientRect();
      if (rect.top <= window.innerHeight) {
        animated = true;
        runCounters();
      }
    }
  };

  window.addEventListener('scroll', checkScroll);
  checkScroll();
});
