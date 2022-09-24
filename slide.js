var slideImg = document.getElementById("#slideImg")
var images = new Array(
  "./assets/css/img/back-ground-img/slider1.png",
  "./assets/css/img/back-ground-img/slider2.png",
  "./assets/css/img/back-ground-img/slider3.png",
  "./assets/css/img/back-ground-img/slider4.png",
);

var imagesLength = images.length;
var i = 0;

function slider() {
  if (i > imagesLength-1) { 
    i = 0;
  }
  slideImg.src = images[i];
  i++;
  setTimeout('slider()',3000);
}