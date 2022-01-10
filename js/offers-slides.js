'use strict';


document.addEventListener('DOMContentLoaded', () => {
    let slides = document.querySelectorAll('.offers-slide'),
        arrows = document.querySelector('.offers-arrows');
    const rBtn = document.querySelector('.offers-arrows_right-arrow'),
          lBtn = document.querySelector('.offers-arrows_left-arrow');
    let index = 0;
    let znachenia = ' ';
   // let slide = document.querySelectorAll('.offers-slide');
    const activeClass = 'active-slide';
    const offers = document.querySelector('.offers');
    let interval = 5000;
    let slideOn = '';
    // clearInterval();

    // function clearInterval(){
    //     clearInterval(interval);
    //     interval = ()=>{
    //         index++;
    //         goMouse(index);
    //     };
    // }



    
    
     offers.addEventListener('mouseenter', ()=>{
      
        checkIndex();
        slideOn = setTimeout(slideGo , interval);

     
    offers.onmouseleave = function mouseLeave(){
        slideOff();
    };
    
    
   

    rBtn.addEventListener('click', ()=>{
        clearInterval(slideOn);
        slides[index].classList.remove(activeClass);
        index +=1;
        slides[index].classList.remove(activeClass);
        if(index + 1 > slides.length){
            index=0;
        }
        slides[index].classList.add(activeClass);
        checkIndex();
        slideOn = setTimeout(slideGo, interval);
       
    });

    lBtn.addEventListener('click', ()=>{
        clearInterval(slideOn);
        slides[index].classList.remove(activeClass);
        index -=1;
        
        if(index + 1 > slides.length){
            index = 0;
        }
        slides[index].classList.add(activeClass);
        checkIndex();
        slideOn = setTimeout(slideGo, interval);
     
    });

       
    //     const run = setInterval(()=> {
    //         slides[index].classList.remove(activeClass);
    //         index +=1;
    //         if(index + 1 > slides.length){
    //             index=0;
    //         }
    //         slides[index].classList.add(activeClass);
    //         checkIndex();
    //         }, 3000 );
    //     offers.onmouseleave = function mouseLeave(){

    //         if(offers.onmouseleave){
    //             checkIndex();
    //             $(lBtn).animate({marginLeft: '-600px'}, 1000);
    //             $(rBtn).animate({marginRight: '-600px'}, 1000);
    //             setTimeout(() => {
    //             arrows.style.display = 'none';
    //         }, 1000);}

    //         clearInterval(run);
    // };
    // //  return(run);
      
    });
    

    // offers.addEventListener('mouseleave', ()=>{
      
    //     slideOff();

    // });
   


    
    function slideGo (){
            
        slides[index].classList.remove(activeClass);
        index +=1;
        if(index + 1 > slides.length){
            index=0;
        }
        slides[index].classList.add(activeClass);
        checkIndex();
        slideOn = setTimeout(slideGo, interval);

    }

    function slideOff(){
        clearInterval(slideOn);
        checkIndex();
        $(lBtn).animate({marginLeft: '-600px'}, 1000);
        $(rBtn).animate({marginRight: '-600px'}, 1000);
        arrows.style.display = 'none';
     
    }

    
    


 
    function checkIndex() {
        if (index !== 0){
            $(lBtn).animate({marginLeft: '0px'}, 300);
            $(rBtn).animate({marginRight: '0px'}, 300);
            lBtn.style.display = 'flex';
            arrows.style.justifyContent = 'space-between';
            arrows.style.display = 'flex';
            }
        else if (index == 0){
            $(rBtn).animate({marginRight: '0px'}, 300);
            lBtn.style.display = 'none';
            arrows.style.justifyContent = 'right';
            arrows.style.display = 'flex';
        }
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