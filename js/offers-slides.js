// 'use strict';


// document.addEventListener('DOMContentLoaded', () => {
//     const slides = document.querySelectorAll('.offers-slide');  
//     const activeClass = 'active-slide';
//     const offers = document.querySelector('.offers');
//     let index = 0;
//     let znachenia = ' ';
    
    

 




//     // offers.mouseover = function sliderOn (){
//     //     setInterval(()=>{

//     //         slides[index].classList.remove(activeClass );
            
//     //         index = index + 1;
            
//     //         if(index + 1 > slides.length){
//     //            index = 0;
//     //         }
            
//     //         slides[index].classList.add(activeClass);
            
            
//     //         }, 5000);
//     // };
// offers.addEventListener('mouseenter', () => {
  
//         let interval = setInterval(()=>{

//         slides[index].classList.remove(activeClass );
        
//         index = index + 1;
        
//         if(index + 1 > slides.length){
//            index = 0;
//         }
        
//         slides[index].classList.add(activeClass);
        
        
//         }, 5000);
   
      
        
// }, );





// // function isVisible (elem) {
// //     let coords = elem.getBoundingClientRect();

// //     let windowHeight = document.documentElement.clientHeight;

// //     // верхний край элемента виден?
// //     let topVisible = coords.top > 0 && coords.top < windowHeight;

// //     // нижний край элемента виден?
// //     let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

// //     console.log(topVisible);
// //     console.log(bottomVisible);

// //       return topVisible || bottomVisible; 
// // }
// //     function showVisible() {
        

// //             if (isVisible(offers)){
// //                 slideOn();
// //                }
               
// //     }
 
// //       showVisible();
// //       addEventListener
// //
//  });



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
    function mouseEnter(){
        let coords = offers.getBoundingClientRect();
        let topVisible = coords.top > 0 && coords.top < document.documentElement.clientHeight;
        let bottomVisible = coords.bottom < window.Height && coords.bottom > 0;
        if (topVisible && bottomVisible){
        var run = setInterval(() => {
            slides[index].classList.remove(activeClass);
            index +=1;
            if(index + 1 > slides.length){
                index=0;
            }
            slides[index].classList.add(activeClass);
            }, 3000 );
        }
            else if(!topVisible && !bottomVisible){
                    clearInterval(run);
                }
 }

 mouseEnter();

});