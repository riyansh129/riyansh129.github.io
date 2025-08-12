// Navbar color change on scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // Dark Mode Toggle
  const darkModeBtn = document.getElementById('darkModeBtn');
  
  if (darkModeBtn) {
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('bg-dark', 'text-light');
    }
  
    darkModeBtn.addEventListener('click', () => {
      document.body.classList.toggle('bg-dark');
      document.body.classList.toggle('text-light');
  
      if (document.body.classList.contains('bg-dark')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    });
  }
  
  // Fade-in effect for sections
  document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll(".fade-in");
    fadeElements.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add("fade-in");
      }, i * 200);
    });
  });
  