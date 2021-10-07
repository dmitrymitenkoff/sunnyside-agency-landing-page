const navigation = document.querySelector('.navigation');
const button = document.querySelector('.btn-toggle');
const menu = document.querySelector('.menu-list');
const lines = document.querySelectorAll('.line');

// Hide menu on open
menu.classList.add('hide');

// Set initial state for the button
button.setAttribute('aria-expanded', 'false');
button.setAttribute('aria-label', 'Open the menu');

// Toggle menu open/close
function toggleMenu(status) {
  if (status === 'false') {
    menu.classList.remove('hide');
    button.setAttribute('aria-expanded', 'true');
    button.setAttribute('aria-label', 'Close the menu');
    lines.forEach(line => line.classList.toggle('active'));
  } else {
    menu.classList.add('hide');
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Open the menu');
    lines.forEach(line => line.classList.toggle('active'));
  }
}

button.addEventListener('click', event => {
  const status = button.getAttribute('aria-expanded');
  toggleMenu(status);
});

// Close menu when user tabs outside the menu
document.addEventListener('focusin', event => {
  if (event.target.closest('nav') !== navigation) {
    toggleMenu(true);
  }
});

// Close menu when user clicks outside the menu
document.addEventListener('click', event => {
  if (event.target.closest('nav') !== navigation) {
    toggleMenu(true);
  }
});
