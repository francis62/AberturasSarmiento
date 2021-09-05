window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

jQuery(document).ready(function(){
  jQuery("navbar").wrap('<div class="nav-placeholder"></div>');
  jQuery(".nav-placeholder").height(jQuery("navbar").outerHeight());
});