const navButton =document.querySelector('.nav-button');
const navOpen=document.querySelector('.nav-open');

//tweenlite.to(object, time, properties)

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
        console.log("done");
        
    }
});


navButton.addEventListener('click', ()=>{
    if(tl.isActive()){
        e.preventDefault();
        e.stopImmediatePropagation();
        return false;
    }
    tweenToggle(tl);
})


function tweenToggle(tween) {
    tween.reversed() ? tween.play() : tween.reverse();
  }