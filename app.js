
// -----------DOCUMENT FADE IN 
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".fade").classList.add("fade-in");
});

function handleLinkClick(event) {
  event.preventDefault();
  const link = event.target.href;


  document.querySelector(".fade").classList.add("fade-out");


  setTimeout(() => {
    window.location.href = link;
  }, 300); 
}

document.querySelectorAll("a").forEach((link) => {
  if (link.getAttribute("href") !== "#") {
    link.addEventListener("click", handleLinkClick);
  }
});



// ----------- NAVBAR
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('is.active');
  menuLinks.classList.toggle('active');
}) 

// ----------- TIMELINE
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
