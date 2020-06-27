const menuIcon = document.querySelector('.navbar-icon')
const menu = document.querySelector('.menu')
const toggleNavbar = document.querySelector('.navbar')
const toggleSocials = document.querySelector('.socials')
const body = document.querySelector('.body')

const menuItemAbout = document.querySelector('#menu-about')
const menuItemWork = document.querySelector('#menu-work')



menuIcon.addEventListener('click', (event) => {
  menu.classList.toggle('d-none');
  menuIcon.classList.toggle('toggle-navbar-icon');
  menu.classList.toggle('toggle-menu');
  toggleNavbar.classList.toggle('toggle-navbar');
  toggleSocials.classList.toggle('toggle-socials');
  controlOverflow()
})

const controlOverflow = () => {
  if (menu.classList.contains('toggle-menu')) {
    body.classList.add('lockScroll')
  } else (
    body.classList.remove('lockScroll')
  )
}

menuItemAbout.addEventListener('click', (event) => {
  if (menu.classList.contains('toggle-menu')) {
    closeMenu()
    controlOverflow()
  }
})

menuItemWork.addEventListener('click', (event) => {
  if (menu.classList.contains('toggle-menu')) {
    closeMenu()
    controlOverflow()
  }
})
const closeMenu = () => {
  menu.classList.add('d-none')
  menu.classList.remove('toggle-menu');
  menuIcon.classList.remove('toggle-navbar-icon');
  toggleNavbar.classList.remove('toggle-navbar')
  toggleSocials.classList.remove('toggle-socials')
}
