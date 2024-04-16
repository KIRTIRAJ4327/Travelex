const backgroundSlider = document.getElementById('background-slider');
const images = [
  'url("../images/box2.jpg")',
  'url("../images/box3.jpg")',
  'url("../images/box4.jpg")',
  // Add more image URLs as needed
];

let currentIndex = 0;

function changeBackground() {
  backgroundSlider.style.backgroundImage = images[currentIndex];
  currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackground, 3000); // Change background every 3 seconds