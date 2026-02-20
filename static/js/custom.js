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

  /* ---- Fade-in on scroll ---- */
  const faders = document.querySelectorAll('.fade-up');
  if (faders.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    faders.forEach(function (el) { observer.observe(el); });
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
