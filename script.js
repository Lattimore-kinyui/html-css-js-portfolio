function toggleMenu() {
  const menu  = document.querySelector('.menu-links');
  const icon = document.querySelector('.hamburger-icon');
  menu.classList.toggle('open');
  icon.classList.toggle('open');
}

// Add this code to attach the event listener
document.querySelector('.hamburger-icon').addEventListener('click', toggleMenu);
