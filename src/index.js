const navigation = document.querySelector('.navigation');
const button = document.querySelector('.btn-toggle');
const menu = document.querySelector('.navigation ul');

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
  } else {
    menu.classList.add('hide');
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Open the menu');
  }
}

button.addEventListener('click', () => {
  const lines = document.querySelectorAll('.line');
  lines.forEach(line => line.classList.toggle('active'));
  const status = button.getAttribute('aria-expanded');
  toggleMenu(status);
});

// Close menu when user tabs outside the menu
document.addEventListener('focusin', event => {
  if (event.target.closest('nav') !== nav) {
    toggleMenu(true);
  }
});

// Close menu when user clicks outside the menu
document.addEventListener('click', event => {
  if (event.target.closest('nav') !== nav) {
    toggleMenu(true);
  }
});
