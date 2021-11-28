// Function for hamburger icon (navigation for mobile)

const menuBtn = document.querySelector('.menu-btn'); // button
const hamburger = document.querySelector('.menu-btn__burger'); // hamburger icon

const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');

let showMenu = false; // default (no menu)

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if(!showMenu) { // if there is menu (let showMenu = true), we ADD the "open" class to the following things
    hamburger.classList.add('open'); // X icon
    nav.classList.add('open');
    menuNav.classList.add('open');
    navItems.forEach(item => item.classList.add('open')); // nav items

    showMenu = true; // this needs to be here so we can close the menu afterwards

  } else { // if there is NO menu, we REMOVE the "open" class to the following things
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    menuNav.classList.remove('open');
    navItems.forEach(item => item.classList.remove('open'));

    showMenu = false; // this needs to be here so we can REopen the menu again
  }
}