const menuIcon = document.querySelector('.navbar-icon')
const toggleMenu = document.querySelector('.menu')
const toggleNavbar = document.querySelector('.navbar')
const toggleSocials = document.querySelector('.socials')
const toggleItemOne = document.querySelector('.navbar-item-one')
const toggleItemTwo = document.querySelector('.navbar-item-two')

menuIcon.addEventListener('click', (event) => {
  toggleMenu.classList.toggle('toggle');
  toggleMenu.classList.toggle('toggle-menu');
  toggleNavbar.classList.toggle('toggle-navbar');
  toggleSocials.classList.toggle('toggle-socials');
  toggleItemOne.classList.toggle('toggle-item');
  toggleItemTwo.classList.toggle('toggle-item');

})