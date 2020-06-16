console.log("JS Loaded!");
// carousel - bootstrap

const hamburger = document.querySelector('.hamburger-menu')
const menu = document.querySelector('.menu');
const menuClose = document.querySelector('#menu-close');

hamburger.addEventListener('click', function () {
  menu.classList.add('menu-open');
});

menuClose.addEventListener('click', function() {menu.classList.remove('menu-open');
  });