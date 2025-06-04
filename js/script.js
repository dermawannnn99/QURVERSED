document.addEventListener("DOMContentLoaded", function () {
  const ctaButton = document.querySelector('.cta-button');
  const target = document.querySelector('#quran-section');
  const materiLink = document.querySelector('#materi-link');
  const homeLink = document.querySelector('#home-link'); 
  const quizLink = document.querySelector('#quiz-link'); 
  const quizSection = document.querySelector('#quiz-section');
  //scroll ke bawah cta buton hero
  if (ctaButton && target) {
    ctaButton.addEventListener('click', function (e) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    });
  }

  //scrol ke bawah untuk materi
  if (materiLink && target) {
    materiLink.addEventListener('click', function (e) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    });
  }

  //klik dan scrol ke hero
  if (homeLink) {
    homeLink.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

if (quizLink && quizSection) {
  quizLink.addEventListener('click', function (e) {
    e.preventDefault();
    quizSection.scrollIntoView({ behavior: 'smooth' });
  });
}


});

//hamburger
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  // Toggle menu
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Smooth scroll untuk link dengan href yang dimulai dengan #
  document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href.startsWith('#')) { // Hanya untuk link internal
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
          navLinks.classList.remove('active'); // Tutup menu setelah klik
        }
      }

    });
  });

  // Tutup menu saat klik di luar
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target)) {
      navLinks.classList.remove('active');
    }
  });
});