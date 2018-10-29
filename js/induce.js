/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function navBar() {
    var responsive = document.getElementById("topNav");
    if (responsive.className === "topnav") {
        responsive.className += " responsive";
    } else {
        responsive.className = "topnav";
    }
}


/* Make nav background change colour, and logo fade out on scroll */
$(window).on("scroll", function() {
	if($(window).scrollTop() > 50) {
		$(".topnav,h1.intro,h2.intro,img.title").addClass("active"); //adds the active class to topnav and banner logo
	} else {
		//remove the background property so it becomes transparent again, defined in main.css
		$(".topnav,h1.intro,h2.intro,img.title").removeClass("active");
	}
});


$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


var acc = document.getElementsByClassName("accordion-gallery");
			var i;
			
			for (i = 0; i < acc.length; i++) {
			    acc[i].addEventListener("click", function() {
			        /* Toggle between adding and removing the "active" class,
			        to highlight the button that controls the panel */
			        this.classList.toggle("active");
			
			        /* Toggle between hiding and showing the active panel */
					var panel = this.nextElementSibling;
						if (panel.style.maxHeight){
						panel.style.maxHeight = null;
						} else {
					panel.style.maxHeight = panel.scrollHeight + "px";
					} 
				});
			}

//Info tile overlay panel		
function overlayShowOne() {
  document.getElementById("overlay-1").className += " show";
}

function overlayHideOne() {
  document.getElementById("overlay-1").classList.remove("show");
}
 function overlayShowTwo() {
  document.getElementById("overlay-2").className += " show";
}

function overlayHideTwo() {
  document.getElementById("overlay-2").classList.remove("show");
}
function overlayShowThree() {
  document.getElementById("overlay-3").className += " show";
}

function overlayHideThree() {
  document.getElementById("overlay-3").classList.remove("show");
}
 function overlayShowFour() {
  document.getElementById("overlay-4").className += " show";
}

function overlayHideFour() {
  document.getElementById("overlay-4").classList.remove("show");
}
