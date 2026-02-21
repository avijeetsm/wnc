document.addEventListener('DOMContentLoaded', function () {

  /* ---- Carousel: pause on hover ---- */
  var heroCarousel = document.getElementById('heroCarousel');
  if (heroCarousel) {
    var bsCarousel = bootstrap.Carousel.getOrCreateInstance(heroCarousel);
    heroCarousel.addEventListener('mouseenter', function () { bsCarousel.pause(); });
    heroCarousel.addEventListener('mouseleave', function () { bsCarousel.cycle(); });
  }

  /* ---- Scroll to Top button ---- */
  const scrollBtn = document.getElementById('scrollToTop');
  if (scrollBtn) {
    window.addEventListener('scroll', function () {
      scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
    });
    scrollBtn.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }


  /* ---- Event popup: show on every load, respects data-display-until ---- */
  var popupEl = document.getElementById('eventPopupModal');
  if (popupEl) {
    var until = popupEl.dataset.displayUntil;
    if (!until || new Date() < new Date(until)) {
      setTimeout(function () {
        new bootstrap.Modal(popupEl, { backdrop: true }).show();
      }, 500);
    }
  }

  /* ---- Navbar shrink on scroll ---- */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 80) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
    });
  }

});
