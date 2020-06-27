const menuIcon = document.querySelector('.navbar-icon')
const menu = document.querySelector('.menu')
const toggleNavbar = document.querySelector('.navbar')
const toggleSocials = document.querySelector('.socials')
const body = document.querySelector('.body')
const menuItemAbout = document.querySelector('#menu-about')
const menuItemWork = document.querySelector('#menu-work')

const toggleMenu = () => {
  menu.classList.toggle('d-none');
  menuIcon.classList.toggle('toggle-navbar-icon');
  menu.classList.toggle('toggle-menu');
  toggleNavbar.classList.toggle('toggle-navbar');
  toggleSocials.classList.toggle('toggle-socials');
  controlOverflow()
}
const controlOverflow = () => {
  if (menu.classList.contains('toggle-menu')) {
    body.classList.add('lockScroll')
  } else (
    body.classList.remove('lockScroll')
  )
}

menuIcon.addEventListener('click', toggleMenu)

menuItemAbout.addEventListener('click', (event) => {
  if (menu.classList.contains('toggle-menu')) {
    toggleMenu()
  }
})

menuItemWork.addEventListener('click', (event) => {
  if (menu.classList.contains('toggle-menu')) {
    toggleMenu()
  }
})
