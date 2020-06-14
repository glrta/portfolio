const menuIcon = document.querySelector('.navbar-icon')
const toggleMenu = document.querySelector('.menu')
// const toggleNavbar = document.getElementById('#navbar')
// const toggleSocials = document.getElementById('#socials')

menuIcon.addEventListener('click', (event) => {
  toggleMenu.classList.toggle('toggle');
  // toggleMenu.classList.toggle('toggle-menu');
  // toggleNavbar.classList.toggle('toggle-navbar');
  // toggleSocials.classList.toggle('toggle-socials');

})