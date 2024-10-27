const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('is.active');
  menuLinks.classList.toggle('active');
}) 


document.addEventListener("DOMContentLoaded", function () {
  const timelineSections = document.querySelectorAll('.timel-container');
  const options = {
    threshold: 0.9
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, options);

  timelineSections.forEach(section => {
    observer.observe(section);
  });
});
