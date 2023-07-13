//event listners
 // element .addEventListner("click",function) ;
 /*const buttonTwo=document.querySelector('.btn-2');
 function alertBtn () {
    alert('i also love javascript');
 };
 buttonTwo.addEventListener("click",alertBtn) ;
 //Mouse over 
 const newBackgroundColor= document.querySelector('.box-3');
 function chnageBgcolor(){
newBackgroundColor.computedStyleMap.backgroundcolor='blue';

 }
newBackgroundColor.addEventListener('mouseover',chnageBgcolor);
*/

//Reveal Event
const revealBtn=document.querySelector('.reveal-btn');
const hiddenContent=document.querySelector('.hidden-content');

function revealContent(){
   if(hiddenContent.classList.contains('reveal-btn')
   ){
      hiddenContent.classList.remove('reveal-btn')
   }else{
      hiddenContent.classList.add('reveal-btn')
   }
}
revealBtn.addEventListener('click',revealContent ); 

/*
event propagation
a)event capturing-starts from 
the root and goes to target after
v its reached the target it goes to
 bubbling phase and traverse backs to root
b)target
c)event bubbling
