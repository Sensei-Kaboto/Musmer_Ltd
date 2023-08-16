const header = document.querySelector("header");
const sliderTextContent = document.getElementById("slider_text_content");



const slider = [
  {
    image: " ./assets/images/logo4.jpg ",
    text: `Investing <br> for the <span class="hr__color">future</span>`,
  }, 
  {
    image: " ./assets/images/hero/hero1.jpg ",
    text: `Quality Services <br> Since <span class="hr__color">2012</span>`,
  }, 
  { 
    image: " ./assets/images/hero/hero2.jpg ",
    text: `Make a Difference <br>through <span class="hr__color">Innovation</span>`,
  }
]

let counter = 0;
setInterval(()=>{
  const currentSlide = slider[counter%3];
  header.style.background = `linear-gradient(rgba(0, 0, 0, 0.425),rgba(0, 0, 0, 0.425)), url(${currentSlide.image})no-repeat`;
  header.style.backgroundSize = `cover`;
  header.style.backgroundPosition = `center`;

  sliderTextContent.innerHTML = currentSlide.text;
  counter++;
}, 1700);

