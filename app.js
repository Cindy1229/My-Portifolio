const navButton =document.querySelector('.nav-button');
const navOpen=document.querySelector('.nav-open');
const introButton=document.querySelector('.intro-button');

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

tl2.to('nav', 0.5 ,{
    height:'100%',
    ease: Power2.easeOut
})
.fromTo('.intro1', 1, {
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

//Buttons
navButton.addEventListener('click', (e)=>{
    if(tl.isActive()){
        e.preventDefault();
        e.stopImmediatePropagation();
        return false;
    }
    tweenToggle(tl);
})

introButton.addEventListener('click', (e)=>{
    if(tl2.isActive()){
        e.preventDefault();
        e.stopImmediatePropagation();
        return false;
    }
    tweenToggle(tl2);
})




function tweenToggle(tween) {
    tween.reversed() ? tween.play() : tween.reverse();
  }