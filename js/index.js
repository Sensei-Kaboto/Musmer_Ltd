let slideImages= document.querySelectorAll('img');
let next = document.querySelector('.next');
let prev= document.querySelector('.prev');
let dots = document.querySelectorAll('.dot');


var counter=0;

// code for next button
next.addEventListener('click',slideNext);
function slideNext(){
    slideImages[counter].style.animation = 'next1 0.8s ease-out forwards';
    if(counter >= slideImages.length-1){
        counter =0;
    }else{
        counter++;
    }
    slideImages[counter].style.animation = 'next2 0.8s ease-out forwards';
    indicators();
}

// code for prev button
prev.addEventListener('click',slidePrev);
function slidePrev(){
    slideImages[counter].style.animation = 'prev1 0.8s ease-out forwards';
    if(counter == 0 ){
        counter =slideImages.length-1;
    }else{
        counter--;
    }
    slideImages[counter].style.animation = 'prev2 0.8s ease-out forwards';
    indicators();
}


// Auto sliding

function autoSliding(){
    deletInterval = setInterval(timer,2500);
    function timer(){
        slideNext();
        indicators();
    }
}

autoSliding();

// stop auto sliding with the mouse
const container = document.querySelector('.slide__container');
container.addEventListener('mouseover', function(){
    clearInterval(deletInterval);
});

// resume the sliding when the mouse is out
container.addEventListener('mouseout',autoSliding)

// add and remove active class from indicators

function indicators(){
    for(i=0 ; i< dots.length; i++){
        dots[i].className= dots[i].className.replace(' active','')
    }
    dots[counter].className += ' active'
}

// add a click event to an indicators
function switchImage(currentImage){
    currentImage.classList.add('active');
    var imageId= currentImage.getAttribute('attr');
    if(imageId > counter){
        slideImages[counter].style.animation ='next1 0.8s ease-out forwards';
        counter = imageId;
        slideImages[counter].style.animation = 'next2 0.8s ease-out forwards';
    }else if(imageId == counter){
        return;
    }
    else{
        slideImages[counter].style.animation = 'prev1 0.8s ease-out forwards';
        counter = imageId;
        slideImages[counter].style.animation = 'prev2 0.8s ease-out forwards';

    }
    indicators();
}