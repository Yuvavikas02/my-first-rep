const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const navLinks = document.querySelectorAll('.site-nav a');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    siteNav.classList.toggle('open');
  });
}

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (siteNav.classList.contains('open')) {
      siteNav.classList.remove('open');
    }
  });
});

const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const submitButton = form.querySelector('button[type="submit"]');
    submitButton.textContent = 'Message Sent!';
    submitButton.disabled = true;
    setTimeout(() => {
      submitButton.textContent = 'Send Message';
      submitButton.disabled = false;
      form.reset();
    }, 1800);
  });
}
