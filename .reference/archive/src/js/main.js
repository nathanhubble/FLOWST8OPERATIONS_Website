/**
 * Main JavaScript File
 * Core functionality for FLOWST8 website
 */

document.addEventListener('DOMContentLoaded', () => {
  console.log('FLOWST8 Website Initialized');
  
  // Initialize Feather Icons if used
  // feather.replace();
  
  // Header Scroll Effect
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  });
});
