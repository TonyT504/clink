/* const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll ('.slide');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1 */


////const size = carouselImages[0].clientWidth;

////carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';


/* function handleNext(){
    counter++;
    if (counter>carouselImages.length){counter=1}


for (let index = 0; index < carouselImages.length; index++) {
    const element = carouselImages[index];
    element.classList.add("hidden")
}

carouselImages[counter-1].classList.remove("hidden")



} */




/* nextBtn.addEventListener('click', () => {
    console.log(carouselImages.length) */


    ////debugger
    ////carouselSlide.style.transition = "transform 0.4s ease-in-out";
    
    /* counter++;
    if (counter>carouselImages.length){counter=1}


for (let index = 0; index < carouselImages.length; index++) {
    const element = carouselImages[index];
    element.classList.add("hidden")
}

carouselImages[counter-1].classList.remove("hidden") */


    ////carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

/* });

prevBtn.addEventListener('click', () => { */


    ////debugger
   //// carouselSlide.style.transition = "transform 0.4s ease-in-out";

   
   
   /* counter--;
    if (counter<1){counter=carouselImages.length}

    for (let index = 0; index < carouselImages.length; index++) {
        const element = carouselImages[index];
        element.classList.add("hidden")
    } */

    
    //carouselImages[counter-1].classList.remove("hidden")


    ////carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

/* });

setInterval(() => { 
    handleNext()
}, 3000) */


// let slideIndex = [1,1];
// let slideId = ["mySlides1", "mySlides2",  "mySlides3",  "mySlides4",  "mySlides5"]
// showSlides(1, 0);
// showSlides(1, 1);



// function plusSlides(n, no) {
//   showSlides(slideIndex[no] += n, no);
// }

// function showSlides(n, no) {
//   let i;
//   let x = document.getElementsByClassName(slideId[no]);
//   if (n > x.length) {slideIndex[no] = 1}    
//   if (n < 1) {slideIndex[no] = x.length}
//   for (i = 0; i < x.length; i++) {
//      x[i].style.display = "none";  
//   }
//   x[slideIndex[no]-1].style.display = "block";  
// }

document.querySelector(".Search-Btn").addEventListener('click',function(){

    var alcohol = document.querySelector("#Alcohol").value
    
    var ingre = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i="+alcohol
    
    fetch (ingre).then(function(response){
    return response.json()
    }).then(function(cocktails){
       
        document.querySelector("#drinks").innerHTML=''
    
        for (let index = 0; index < 5; index++) {
            var drinkName1= document.createElement('p')
        var drinkNumber= Math.ceil(Math.random()*cocktails.drinks.length)
        drinkName1.textContent=cocktails.drinks[drinkNumber].strDrink;
       
        document.getElementById("drinks").appendChild(drinkName1);
           
            }
    });
    
    });


