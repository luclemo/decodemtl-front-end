// ================================
// Slideout Navigation
// ================================

if (document.getElementById("nav-trigger")) {
	
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
}

// ================================
// Accordion list (faq)
// ================================
var action = 'click';
var speed = 300;

$(document).ready( function() {
    
    // 	question handler
   $('.question').on(action, function() {
       
       // get next element
       $(this).next()
           .slideToggle(speed)
           		.siblings('.answer').slideUp(speed);
       
       // rotate arrow
       var icon = $(this).children('.petal-icon');
       
       // remove rotate class
       $('.petal-icon').not(icon).removeClass('rotate');
       
       // toggle rotate class
       icon.toggleClass('rotate');
   });
});