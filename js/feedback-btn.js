'use strict';

const formAt = document.querySelector('.form-at'),
      telBtn = document.querySelector('.tel');
     
    //   none = getComputedStyle(formAt).display,
    //   active = getComputedStyle(formAt).display.fixed;

    //   let activeone = 'activeone';
    //   let none = 'none';

    //   let format = getComputedStyle(formAt).display;
    // //   formAt.classList.toggle("none");
    
     telBtn.onclick =function(){
        
        // formAt.classList.toggle("activeone");
        if($(formAt).css('bottom') == '-500px'){
            
            $(formAt).animate({bottom: '0px'}, 1000);
          
        } else if($(formAt).css('bottom') == '0px'){
            // formAt.classList.remove("none");
            $(formAt).animate({bottom: '-500px'}, 1000);
        }
        
        
     }; 
   
// telBtn.onclick = function(){
//     if(format == 'none'){
//         formAt.classList.add(activeone);
//         console.log(getComputedStyle(formAt).display);  
//     }
//     telBtn.onclick = function(){
//         if(format == 'block'){
//             formAt.classList.remove(activeone);
//             formAt.classList.add(none);
//         }
//     };
// };


// let display = '';
// formAt.style.display = display;


// console.log(display);
 