'use strict';


document.addEventListener('DOMContentLoaded', () =>{
    let slide = document.querySelector('.offers-slide');
    let i = 0;
    let slideInterval = setInterval(nextSlide, 2000);
    
    function nextSlide(){
        i += 1%slide.length;
        slide[i].className = 'offers-slide offers-slide__head--style-reason active-slide';

    }
});
