const header = document.querySelector("header");
const sliderTextContent = document.getElementById("slider_text_content");

const slider = [
  {
    image: "./assets/images/logo4.jpg",
    text: `Investing <br> for the <span class="hr__color">future</span>`
  }, 
  {
    image: "./assets/images/afitap.jpg",
    text: `Hello <br> for the <span class="hr__color">past</span>`
  }, 
  { 
    image: "./assets/images/brand1.jpg",
    text: `Hi <br> for the <span class="hr__color">Present</span>`
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
}, 5000)