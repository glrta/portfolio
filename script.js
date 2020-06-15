const menuIcon = document.querySelector('.navbar-icon')
const toggleMenu = document.querySelector('.menu')
const toggleNavbar = document.querySelector('.navbar')
const toggleSocials = document.querySelector('.socials')


menuIcon.addEventListener('click', (event) => {
  toggleMenu.classList.toggle('d-none');
  toggleMenu.classList.toggle('toggle-menu');
  toggleNavbar.classList.toggle('toggle-navbar');
  toggleSocials.classList.toggle('toggle-socials');


})

// check if d-none class is present
// if not, toggle the other classes