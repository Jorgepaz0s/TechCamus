var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('nav-active');
});

body.addEventListener('click', (event) => {
  const target = event.target;
  
  // Comprueba si el clic se realizó fuera del menú hamburguesa
  if (!target.closest('header')) {
    nav.classList.remove('nav-active');
  }
});