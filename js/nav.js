const navLinks = document.querySelectorAll('nav ul li');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    link.classList.toggle('active');
  });
});