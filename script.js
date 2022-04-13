//const carouselSlide = document.querySelector('.carousel-slide');
//const carouselImages = document.querySelectorAll ('.slide');

//const prevBtn = document.querySelector('#prevBtn');
//const nextBtn = document.querySelector('#nextBtn');

//let counter = 1
//const size = carouselImages[0].clientWidth;

//carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//function handleNext(){
    //counter++;
    //if (counter>carouselImages.length){counter=1}


//for (let index = 0; index < carouselImages.length; index++) {
    //const element = carouselImages[index];
    //element.classList.add("hidden")
//}

//carouselImages[counter-1].classList.remove("hidden")



//}




nextBtn.addEventListener('click', () => {
    console.log(carouselImages.length)
    ///debugger
    ///carouselSlide.style.transition = "transform 0.4s ease-in-out";
    //counter++;
    //if (counter>carouselImages.length){counter=1}


//for (let index = 0; index < carouselImages.length; index++) {
    //const element = carouselImages[index];
    //element.classList.add("hidden")
//}

//arouselImages[counter-1].classList.remove("hidden")
    ///carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//});

//prevBtn.addEventListener('click', () => {
    ///debugger
   ///carouselSlide.style.transition = "transform 0.4s ease-in-out";

    //counter--;
    //if (counter<1){counter=carouselImages.length}

    //for (let index = 0; index < carouselImages.length; index++) {
        //const element = carouselImages[index];
        //element.classList.add("hidden")
    //}
    
    //carouselImages[counter-1].classList.remove("hidden")
    ///arouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//});

//setInterval(() => { 
    //handleNext()

    let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}



}, 3000)