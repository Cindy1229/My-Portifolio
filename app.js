const navButton =document.querySelector('.nav-button');
const navOpen=document.querySelector('.nav-open');
const introButton=document.querySelector('.intro-button');
const contactButton=document.querySelector('.contact-button')


var toggle1=false;
var toggle2=false;
var toggle3=false;

//tweenlite.to(object, time, properties)
//Gallery animations
const tl=new TimelineLite({paused: true, reversed: true});
tl.to('.cover',1,{
    width:'70%',
    ease: Power2.easeOut
},)
.to('nav',1,{
    height:'100%',
    ease: Power2.easeOut
},"-=0.5")
.fromTo('.nav-open', 1,{
    opacity: 0,
    x: 50,
    ease: Power2.easeOut
},{
    opacity: 0.8,
    x: 0,
    onComplete: function(){
        navOpen.style.pointerEvents="auto";
        
    }
});

//About animaton 1
const tl2=new TimelineLite({paused: true, reversed: true});

tl2.fromTo('.intro1', 1, {
    opacity: 0,
    x:100
},{
    opacity: 0.9,
    x: 0
})
.fromTo('.intro2', 1, {
    opacity: 0,
    x:-50
},{
    opacity: 0.9,
    x: 0 
}, "-=0.5")


//Contact animation
const tl3=new TimelineLite({paused: true, reversed: true});
tl3.to('.contact', 1, {
    opacity: 0.9
})


//Buttons
navButton.addEventListener('click', (e)=>{
    toggle1=!toggle1;

    if (toggle2){
        
        toggle2=tweenToggle(tl2, toggle2);
        
    }
    
    if (toggle3){
        
        toggle3=tweenToggle(tl3, toggle3);
        
    }
    if(tl.isActive()){
        e.preventDefault();
        e.stopImmediatePropagation();
        return false;
    }
    tweenToggle(tl);
    
})

introButton.addEventListener('click', (e)=>{
    toggle2=!toggle2;

    if (toggle1){
        toggle1=tweenToggle(tl, toggle1);
        
    }
    if (toggle3){
        
        toggle3=tweenToggle(tl3, toggle3);
        
    }

    if(tl2.isActive()){
        e.preventDefault();
        e.stopImmediatePropagation();
        return false;
    }
    tweenToggle(tl2);
    
})

contactButton.addEventListener('click', (e)=>{
    toggle3=!toggle3;
    if (toggle1){
        toggle1=tweenToggle(tl, toggle1);
        
    }
    
    if (toggle2){
        
        toggle2=tweenToggle(tl2, toggle2);
        
    }

    if(tl3.isActive()){
        e.preventDefault();
        e.stopImmediatePropagation();
        return false;
    }
    tweenToggle(tl3);
})




function tweenToggle(tween, toggle) {
    tween.reversed() ? tween.play() : tween.reverse();
    return (!toggle);
  }