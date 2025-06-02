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

