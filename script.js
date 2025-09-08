
// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Form Submission (demo only)
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Message sent successfully!");
});
