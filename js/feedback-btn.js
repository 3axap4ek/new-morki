'use strict';
window.addEventListener('DOMContentLoaded', ()=>{
   const formAt = document.querySelector('.form-at'),
      telBtn = document.querySelector('.tel'),
      phoneTel = document.querySelector('.phone-tel'),
      krestikBtn = document.querySelector('.krest');
      telBtn.addEventListener('click', ()=> {
         if($(formAt).css('bottom') == '-600px'){
             getFeedBack (); }
 
             krestikBtn.addEventListener('click', ()=>{
                 if($(formAt).css('bottom') == '20px'){
                     cancelFeedBack ();
                 }
             });
 
         });
   
   
 
      function cancelFeedBack (){
         $(formAt).animate({bottom: '-600px'}, 1000);
         setTimeout(() => {
            phoneTel.style.display = 'block';
         }, 1000);
      }
     
      function getFeedBack (){
         $(formAt).animate({bottom: '20px'}, 1000);
            phoneTel.style.display = 'none';
       
      }
});

 





    //   none = getComputedStyle(formAt).display,
    //   active = getComputedStyle(formAt).display.fixed;

    //   let activeone = 'activeone';
    //   let none = 'none';

    //   let format = getComputedStyle(formAt).display;
    // //   formAt.classList.toggle("none");
    
    //  telBtn.onclick =function(){
        
    //     // formAt.classList.toggle("activeone");
    //     if($(formAt).css('bottom') == '-600px'){
            
    //         $(formAt).animate({bottom: '20px'}, 1000);
    //         phoneTel.style.display = 'none';
    //     } else if($(formAt).css('bottom') == '20px'){
    //         // formAt.classList.remove("none");
    //         $(formAt).animate({bottom: '-600px'}, 1000);
    //     }
        
        
    //  }; 




   
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
 