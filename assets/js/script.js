feather.replace()

let theme = localStorage.getItem('data-theme')

const changeThemeToDark = () => {
  document.getElementById('lightIcon').setAttribute('style', 'display:none')
  document.getElementById('lightMainIcon').setAttribute('style', 'display:none')
  document.getElementById('darkIcon').setAttribute('style', 'inline-block')
  document.getElementById('darkMainIcon').setAttribute('style', 'inline-block')
  document.documentElement.setAttribute('data-theme', 'dark') // set theme to dark
  localStorage.setItem('data-theme', 'dark') // save theme to local storage
}

checkbox.addEventListener('change', () => {
  let theme = localStorage.getItem('data-theme')
  if (theme === 'dark') {
    changeThemeToDark()
  } else if (theme === 'light') {
    changeThemeToDark()
  }
})


const mobileNav = document.getElementById('mobileNav')
const menuOpen = document.getElementById('menuOpen')
const menuClose = document.getElementById('menuClose')
mobileNav.style.display = 'none'
menuClose.style.display = 'none'
menuOpen.style.display = 'block'

const resizeListener = () => {
  if (window.innerWidth > 576) {
    mobileNav.style.display = 'none'
    menuClose.style.display = 'none'
    menuOpen.style.display = 'block'
  }
}

window.addEventListener('resize', resizeListener)

const openMobile = () => {
  if (mobileNav.style.display === 'none') {
    mobileNav.style.display = 'block'
    menuOpen.style.display = 'none'
    menuClose.style.display = 'block'
  } else {
    mobileNav.style.display = 'none'
    menuClose.style.display = 'none'
    menuOpen.style.display = 'block'
  }
}
