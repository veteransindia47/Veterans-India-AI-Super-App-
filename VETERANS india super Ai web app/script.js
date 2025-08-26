 // Mobile Menu Toggle
  
     function toggleMenu() { document.getElementById('nav-links').classList.toggle('show'); }
    function navigateTo(page) { window.location.href = page; }
      function scrollCarousel(distance){
    const carousel = document.getElementById('wing-carousel');
    carousel.scrollBy({ left: distance, behavior: 'smooth' });
  }

