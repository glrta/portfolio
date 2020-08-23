const menuIcon = document.querySelector('.navbar-icon');
const menu = document.querySelector('.menu');
const toggleNavbar = document.querySelector('.navbar');
const toggleSocials = document.querySelector('.socials');
const body = document.querySelector('.body');
const menuItem = document.querySelectorAll('#menu');
const download = document.querySelectorAll('.download');

const toggleMenu = () => {
  menu.classList.toggle('d-none');
  menuIcon.classList.toggle('toggle-navbar-icon');
  menu.classList.toggle('toggle-menu');
  toggleNavbar.classList.toggle('toggle-navbar');
  toggleSocials.classList.toggle('toggle-socials');
  controlOverflow();
};
const controlOverflow = () => {
  if (menu.classList.contains('toggle-menu')) {
    body.classList.add('lockScroll');
  } else body.classList.remove('lockScroll');
};

menuIcon.addEventListener('click', toggleMenu);

menuItem.forEach((item) => {
  item.addEventListener('click', (event) => {
    if (menu.classList.contains('toggle-menu')) {
      toggleMenu();
    }
  });
});

download.forEach((item) => {
  item.addEventListener('click', () => {
    window.open('./assets/giovanna-aveiro_cv.pdf');
  });
});
