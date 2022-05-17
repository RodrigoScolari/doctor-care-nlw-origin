window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopBtnOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight /2

  const sectionTop = section.offsetTop 
  const sectionHeight = section.offsetHeight 
  const sectionTopReachOrPassTargetLine = targetLine >= sectionTop

  const sectionEndsAt = sectionTop + sectionHeight 
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine
  
  const sectionBoundaries = sectionTopReachOrPassTargetLine && !sectionEndPassedTargetLine

  const sectionID = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionID}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
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
