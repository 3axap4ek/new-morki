'use strict';


document.addEventListener('DOMContentLoaded', () =>{
    let slide = document.querySelectorAll('.offers-slide');
    let activeSlide = 'active-slide';
    let i = 0;
    let slideInterval = setInterval(nextSlide, 2000);
    
    function nextSlide(){
        slide[i].classList.remove(activeSlide);
        i = (i + 1)%slide.length;
        slide[i].classList.add(activeSlide);

    }
});
