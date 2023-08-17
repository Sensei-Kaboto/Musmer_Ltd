const header = document.querySelector("header");
const infoDiv = document.querySelector(".info");
const sliderTextContent = document.getElementById("slider_text_content");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const dotsContainer = document.querySelector(".dots__slider"); // Corrected class name

const slider = [
  {
    image: "./assets/images/logo4.jpg",
    text: `Investing <br> for the <span class="hr__color">future</span>`,
  },
  {
    image: "./assets/images/hero/hero1.jpg",
    text: `Quality Services <br> Since <span class="hr__color">2012</span>`,
  },
  {
    image: "./assets/images/hero/hero2.jpg",
    text: `Make a Difference <br>through <span class="hr__color">Innovation</span>`,
  },
];

let counter = 0;
let intervalId;

function updateSlider() {
  const currentSlide = slider[counter % 3];
  header.style.background = `linear-gradient(rgba(0, 0, 0, 0.425), rgba(0, 0, 0, 0.425)), url(${currentSlide.image}) no-repeat`;
  header.style.backgroundSize = `cover`;
  header.style.backgroundPosition = `center`;

  // Apply animation to the text content within .info div
  infoDiv.style.animation = 'none'; // Remove existing animation
  void infoDiv.offsetWidth; // Trigger reflow to restart the animation
  infoDiv.style.animation = 'textFadeIn .7s forwards'; // Apply the animation again

  sliderTextContent.innerHTML = currentSlide.text;

  // Update dot appearance
  const dots = Array.from(dotsContainer.children);
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === counter);
  });
}

function slideNext() {
  if (counter >= slider.length - 1) {
    counter = 0;
  } else {
    counter++;
  }

  updateSlider();
}

function slidePrev() {
  if (counter <= 0) {
    counter = slider.length - 1;
  } else {
    counter--;
  }

  updateSlider();
}

function startAutoSlide() {
  intervalId = setInterval(slideNext, 4000); // Adjust the interval as needed
}

function stopAutoSlide() {
  clearInterval(intervalId);
}

// Call the initial updateSlider function to set the first slide
updateSlider();
startAutoSlide();

next.addEventListener('click', () => {
  stopAutoSlide();
  slideNext();
  startAutoSlide();
});

prev.addEventListener('click', () => {
  stopAutoSlide();
  slidePrev();
  startAutoSlide();
});

dotsContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('dot')) {
    const clickedIndex = Array.from(dotsContainer.children).indexOf(event.target);
    if (clickedIndex !== -1) {
      stopAutoSlide();
      counter = clickedIndex;
      updateSlider();
      startAutoSlide();
    }
  }
});
