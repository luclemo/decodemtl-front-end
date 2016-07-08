// Slideout Navigation
document.getElementById('nav-trigger').addEventListener('click', checkNav);
window.addEventListener("keyup", function(e) {
  if (e.keyCode == 27) closeNav();
}, false);

function checkNav() {
  if (document.body.classList.contains('nav-container-active')) {
    closeNav();
  } else {
    openNav();
  }
}

function closeNav() {
  document.body.classList.remove('nav-container-active');
}

function openNav() {
  document.body.classList.add('nav-container-active');
}