const hamburgerButton = document.querySelector('.mobile-nav-toggle');
const nav = document.querySelector('.primary-navigation');

hamburgerButton.addEventListener('click', () => {
  const visibility = nav.getAttribute('data-visible');

  if (visibility === 'false') {
    nav.setAttribute('data-visible', true);
    hamburgerButton.setAttribute('aria-expanded', true);
  } else {
    nav.setAttribute('data-visible', false);
    hamburgerButton.setAttribute('aria-expanded', false);
  }
});
