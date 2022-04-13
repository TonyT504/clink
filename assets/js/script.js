const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll ('.slide');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1
//const size = carouselImages[0].clientWidth;

//carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

function handleNext(){
    counter++;
    if (counter>carouselImages.length){counter=1}


for (let index = 0; index < carouselImages.length; index++) {
    const element = carouselImages[index];
    element.classList.add("hidden")
}

carouselImages[counter-1].classList.remove("hidden")



}




nextBtn.addEventListener('click', () => {
    console.log(carouselImages.length)
    //debugger
    //carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    if (counter>carouselImages.length){counter=1}


for (let index = 0; index < carouselImages.length; index++) {
    const element = carouselImages[index];
    element.classList.add("hidden")
}

carouselImages[counter-1].classList.remove("hidden")
    //carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

prevBtn.addEventListener('click', () => {
    //debugger
   // carouselSlide.style.transition = "transform 0.4s ease-in-out";

    counter--;
    if (counter<1){counter=carouselImages.length}

    for (let index = 0; index < carouselImages.length; index++) {
        const element = carouselImages[index];
        element.classList.add("hidden")
    }
    
    carouselImages[counter-1].classList.remove("hidden")
    //carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

setInterval(() => { 
    handleNext()



}, 3000)
