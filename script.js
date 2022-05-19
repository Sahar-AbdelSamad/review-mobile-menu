const openMenu = document.querySelector('.menu-bars');
const mobileMenu = document.querySelector('#mobile-nav');
const closeMenu = document.querySelector('#mobile-nav');

function show() {
  mobileMenu.style.display = 'flex';
  mobileMenu.style.top = '0';
}

function close() {
  mobileMenu.style.top = '-100%';
}

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);