window.addEventListener('scroll', onScroll )

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopBtnOnScroll()
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopBtnOnScroll() {
  if (scrollY > 530) {
    backToTopBtn.classList.add('show')
  } else {
    backToTopBtn.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
#home,
#home img,
#home .stats,
#services,
#services header,
#services .card,
#about,
#about header,
#about p,
#about img,
footer
`)
