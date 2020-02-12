//carousel javascript referenced from https://www.w3schools.com/howto/howto_js_slideshow.asp

var carouselIndex = 0;
showCarousel();

function showCarousel() {
  var i;
  var slides = document.getElementsByClassName("slides");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  carouselIndex++;

  if (carouselIndex > slides.length) {
  	carouselIndex = 1
  }

  slides[carouselIndex-1].style.display = "block";
  setTimeout(showSlides, 3000);
  //change image every 3 seconds
}