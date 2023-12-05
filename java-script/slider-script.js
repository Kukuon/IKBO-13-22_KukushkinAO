let currentIndex = 0;

function changeCar(direction) {
  const slider = document.querySelector('.slider');
  const cars = document.querySelectorAll('.slide');
  const sliderWidth = document.querySelector('.slider-container').offsetWidth;

  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = cars.length - 1;
  } else if (currentIndex >= cars.length) {
    currentIndex = 0;
  }

  const displacement = -currentIndex * sliderWidth;
  slider.style.transform = `translateX(${displacement}px)`;
}
