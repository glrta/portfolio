const menuIcon = document.querySelector('.navbar-icon')
const toggleMenu = document.querySelector('.menu')
const toggleNavbar = document.querySelector('.navbar')
const toggleSocials = document.querySelector('.socials')
const body = document.querySelector('.body')


menuIcon.addEventListener('click', (event) => {
  toggleMenu.classList.toggle('d-none');
  menuIcon.classList.toggle('toggle-navbar-icon');
  toggleMenu.classList.toggle('toggle-menu');
  toggleNavbar.classList.toggle('toggle-navbar');
  toggleSocials.classList.toggle('toggle-socials');
  hideOverflow()
})

const hideOverflow = () => {
  if (toggleMenu.classList.contains('toggle-menu')) {
    body.classList.add('lockScroll')
  } else (
    body.classList.remove('lockScroll')
  )
}

