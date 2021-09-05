

var navbar = document.getElementById("navbar")

  function showMenu(){
      navbar.style.right = "0";
  }

  function hiddenMenu(){
      navbar.style.right = "-200px";
  }




/*------------------START slideshow W3-----------------------*/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}




/*------------------FINISH slideshow W3-----------------------*/

/*----------------TRANSICION PRODUCTOS---------------
const left = document.querySelector('.left-Modena');
const right = document.querySelector('.right-Modena');
const container = document.querySelector('.container');

left.addEventListener('mouseenter',() => {
  container.classList.add('hover-left');
});

left.addEventListener('mouseleave',() => {
  container.classList.remove('hover-left');
});

right.addEventListener('mouseenter',() => {
  container.classList.add('hover-right');
});

right.addEventListener('mouseleave',() => {
  container.classList.remove('hover-right');
});
-------------------------------------------------*/
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

/*----------------------------------------------*/

