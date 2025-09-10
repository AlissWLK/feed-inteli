// script.js - small interactions
document.addEventListener('DOMContentLoaded', function(){
  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(e){
      e.preventDefault();
      const t = document.querySelector(this.getAttribute('href'));
      if(t) t.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });

  // Simple reveal on scroll for elements with .fade-up (for longer pages)
  const reveals = document.querySelectorAll('.fade-up');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.style.animationPlayState = 'running';
        obs.unobserve(entry.target);
      }
    });
  }, {threshold:0.12});
  reveals.forEach(r => {
    r.style.animationPlayState = 'paused';
    obs.observe(r);
  });
});
