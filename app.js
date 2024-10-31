
// -----------DOCUMENT FADE IN 
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".fade").classList.add("fade-in");
});

function handleLinkClick(event) {
  event.preventDefault();
  const link = event.targ