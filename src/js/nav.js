/* ----- */
/* Nav and hamburger icon functionality */
/* ----- */

const menuBtn = document.querySelector('.menu-btn'); // Button
const hamburger = document.querySelector('.menu-btn__burger'); // Hamburger icon

const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');

let showMenu = false; // Default: no menu

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  // If there is menu (showMenu = true), we add "open" class to the following things
  if (!showMenu) {
    hamburger.classList.add('open');
    nav.classList.add('open');
    menuNav.classList.add('open');
    navItems.forEach((item) => item.classList.add('open'));

    showMenu = true; // This needs to be here so we can close the menu afterwards
  } else {
    // If there is no menu, we remove "open" class to the following things
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    menuNav.classList.remove('open');
    navItems.forEach((item) => item.classList.remove('open'));

    showMenu = false; // This needs to be here so we can reopen the menu again
  }
}
