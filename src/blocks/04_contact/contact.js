  //tween the svg path + circle
  gsap.timeline(
    {scrollTrigger:{
      trigger:'#scrollDist',
      scrub: true,
      pin: '#contact',
      start:'top 80px', 
      end:"+=200%", 
      ease: 'none',
      }
    }) 
    .to('#c', {motionPath:'#p', immediateRender:true, ease:'none'}, 0)
    .from('#p', {drawSVG:'0 0', ease:'none',}, 0)

  //move container's x/y to follow the red circle
  gsap.ticker.add( ()=> gsap.to('#map_container', {duration:0.7, x:-gsap.getProperty('#c', 'x'), y:-gsap.getProperty('#c', 'y')}) );

  //center the container's left/top position
  window.onload = window.onresize = ()=> { gsap.set('#map_container', {left:innerWidth/2, top:innerHeight/2}); }