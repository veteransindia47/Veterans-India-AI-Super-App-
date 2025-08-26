 // Mobile Menu Toggle
  
     function toggleMenu() { document.getElementById('nav-links').classList.toggle('show'); }
    function navigateTo(page) { window.location.href = page; }
      function scrollCarousel(distance){
    const carousel = document.getElementById('wing-carousel');
    carousel.scrollBy({ left: distance, behavior: 'smooth' });
  }

// Smooth scrolling between sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
