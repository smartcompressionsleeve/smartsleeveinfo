// ===============================
// Mobile Navigation Toggle
// Smart Compression Sleeve Website
// ===============================

document.addEventListener('DOMContentLoaded', () => {

  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  // Safety check
  if (!hamburger || !navLinks) return;

  // Toggle mobile menu
  hamburger.addEventListener('click', () => {

    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');

    // Prevent background scrolling when menu is open
    document.body.classList.toggle('menu-open');

  });

  // Close menu when a nav link is clicked
  navLinks.querySelectorAll('a').forEach(link => {

    link.addEventListener('click', () => {

      if (window.innerWidth <= 900) {

        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
        document.body.classList.remove('menu-open');

      }

    });

  });

  // Automatically close menu on resize to desktop
  window.addEventListener('resize', () => {

    if (window.innerWidth > 900) {

      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
      document.body.classList.remove('menu-open');

    }

  });

});
