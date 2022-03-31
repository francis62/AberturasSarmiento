/*
var navbar = document.getElementClassName("navbar-end")

  function showMenu(){
      navbar.style.right = "0";
  }

  function hiddenMenu(){
      navbar.style.right = "-200px";
  }


  $(window).resize(function(){
    if($(this).width() > 700){
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
    }
  });

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

*/