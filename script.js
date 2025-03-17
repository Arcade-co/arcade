// Toggle Hamburger and Close Button
function toggleMenu() {
    const nav = document.getElementById('navMenu');
    nav.classList.toggle('active');
  }
  
  // Smooth Scrolling for Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth'
        });
      }
  
      // Close menu after clicking
      document.getElementById('navMenu').classList.remove('active');
    });
  });
  