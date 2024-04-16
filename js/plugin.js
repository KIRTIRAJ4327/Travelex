const backgroundSlider = document.getElementById('background-slider');
const images = [
  'url("../images/tr2.jpg")',
  'url("../images/tr4.jpg")',
  'url("../images/tr5.jpg")',
  'url("../images/tr1.jpg")',
  'url("../images/tr3 .jpg")',
  // Add more image URLs as needed
];

let currentIndex = 0;

function changeBackground() {
  backgroundSlider.style.backgroundImage = images[currentIndex];
  currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackground, 3000); // Change background every 3 seconds