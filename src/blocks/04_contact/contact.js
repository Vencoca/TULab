//window.onload = window.onresize = ()=> { gsap.set('#map_cont', {}); }
gsap.set('#scrollDist', {width:'100%', height:'500%'})
gsap.set('#map_cont', {width:5379, height:2442, transformOrigin:'0 0'})
//gsap.to('#map_cont', {duration:1, opacity:1, ease:'power2.inOut', delay:0.3})
gsap.timeline({scrollTrigger:{trigger:'#scrollDist', start:'top top', end:'bottom bottom', scrub:1}}) 
    .to('#c', {motionPath:'#p', immediateRender:true, ease:'none'}, 0)
    .from('#p', {drawSVG:'0 0', ease:'none'}, 0)

//move container's x/y to follow the red circle
gsap.ticker.add( ()=> gsap.to('#map_cont', {duration:0.7, x:-gsap.getProperty('#c', 'x'), y:-gsap.getProperty('#c', 'y')}) );

//center the container's left/top position
window.onload = window.onresize = ()=> { gsap.set('#map_cont', {left:innerWidth/2, top:innerHeight/2}); }