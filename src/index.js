const navigation = document.querySelector('.navigation');
const button = document.querySelector('.btn-toggle');
const menu = document.querySelector('.menu-list');
const hamburger = document.querySelector('.ham');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
});

// Set initial state for the button
button.setAttribute('aria-expanded', 'false');
button.setAttribute('aria-label', 'Open the menu');

const mediaQuery = window.matchMedia('(max-width: 480px)');

function handleMedia(e) {
  if (e.matches) {
    menu.classList.add('hide');
  } else {
    menu.classList.remove('hide');
  }
}
mediaQuery.addEventListener('change', handleMedia);
handleMedia(mediaQuery);

// Toggle menu open/close
function toggleMenu(status) {
  if (status === 'false') {
    menu.classList.remove('hide');
    button.setAttribute('aria-expanded', 'true');
    button.setAttribute('aria-label', 'Close the menu');
  } else {
    menu.classList.add('hide');
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Open the menu');
  }
}

button.addEventListener('click', event => {
  const status = button.getAttribute('aria-expanded');
  toggleMenu(status);
});
