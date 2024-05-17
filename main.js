// Get references to elements
const navMenu = document.getElementById('nav-menu');
const toggleMenu = document.getElementById('nav-toggle');
const closeMenu = document.getElementById('nav-close');

// Ensure elements exist before adding event listeners
if (navMenu && toggleMenu) {
  // Show menu
  toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });
}

if (navMenu && closeMenu) {
  // Hide menu
  closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show');
  });
}

// Remove menu when a link is clicked
const navLinks = document.querySelectorAll('.nav__link');
if (navMenu && navLinks.length > 0) {
  navLinks.forEach(link => link.addEventListener('click', () => {
    navMenu.classList.remove('show');
  }));
}

// Scroll section active link
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id');

    const navLinkElement = document.querySelector(`.nav__menu a[href*="${sectionId}"]`);
    if (navLinkElement) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinkElement.classList.add('active');
      } else {
        navLinkElement.classList.remove('active');
      }
    }
  });
}

window.addEventListener('scroll', scrollActive);
