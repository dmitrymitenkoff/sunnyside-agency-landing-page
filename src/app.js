const navigation = document.querySelector('.navigation');
const button = document.querySelector('.btn-toggle');
const menu = document.querySelector('.menu-list');

// Hide menu on open
menu.classList.add('hide');

// Set initial state for the button
button.setAttribute('aria-expanded', 'false');
button.setAttribute('aria-label', 'Open the menu');

// Toggle menu open/close
function toggleMenu(status) {
  if (status === 'false') {
    console.log('status false is ' + status);

    menu.classList.remove('hide');
    button.setAttribute('aria-expanded', 'true');
    button.setAttribute('aria-label', 'Close the menu');
    console.log(button.getAttribute('aria-expanded'));
  } else {
    console.log('status true is ' + status);
    menu.classList.add('hide');
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Open the menu');
  }
}

button.addEventListener('click', event => {
  const lines = document.querySelectorAll('.line');
  lines.forEach(line => line.classList.toggle('active'));
  const status = button.getAttribute('aria-expanded');
  toggleMenu(status);
  console.log(event.target);
});

// Close menu when user tabs outside the menu
document.addEventListener('focusin', event => {
  console.log(event.target);
  if (event.target.closest('nav') !== navigation) {
    toggleMenu(true);
  }
});

// Close menu when user clicks outside the menu
document.addEventListener('click', event => {
  console.log(event.target);
  if (event.target.closest('nav') !== navigation) {
    toggleMenu(true);
  }
});
