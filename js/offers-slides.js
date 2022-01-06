'use strict';


document.addEventListener('DOMContentLoaded', () => {
    let slides = document.querySelectorAll('.offers-slide');
    let index = 0;
    let znachenia = ' ';
   // let slide = document.querySelectorAll('.offers-slide');
    const activeClass = 'active-slide';
    const offers = document.querySelector('.offers');
/* \
    let i = 0;*/
    offers.onmouseenter= function mouseEnter(){
        var run = setInterval(() => {
            slides[index].classList.remove(activeClass);
            index +=1;
            if(index + 1 > slides.length){
                index=0;
            }
            slides[index].classList.add(activeClass);
            }, 3000 );
        offers.onmouseleave= function mouseLeave(){
            clearInterval(run);
    }
        return run;
    }
 




/*function isVisible (elem) {
    let coords = elem.getBoundingClientRect();

    let windowHeight = document.documentElement.clientHeight;

    // верхний край элемента виден?
    let topVisible = coords.top > 0 && coords.top < windowHeight;

    // нижний край элемента виден?
    let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;
    console.log(topVisible);
    console.log(bottomVisible);
    if (topVisible == 'true' || bottomVisible == 'true'){
        setInterval(nextSlide, 3000);
    }else{
      return topVisible || bottomVisible;
    }
}*/
/*window.onscroll = function() {
    let coords = offers.getBoundingClientRect();
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    let topVisible = coords.top > 0 && coords.top < document.documentElement.clientHeight;
    if (topVisible > 100){
        var run = setInterval(function(){
            slide[i].classList.remove(activeSlide);
        i = (i + 1)%slide.length;
        slide[i].classList.add(activeSlide);
        }, 3000)
    }
    else {
        clearInterval(run);    }
};

/*function showVisible(){
if (isVisible(offers)) {
   setInterval(nextSlide, 3000);
}
}*/
//window.onscroll = ind;




});