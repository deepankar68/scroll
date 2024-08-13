let tl = gsap.timeline();
tl.from('h2', {
    y: -20,
    opacity: 0,
    duration: .3,
    delay:.3
});

tl.from('h4', {
    y: -20,
    opacity: 0,
    duration: .3,
    stagger: 0.3
});

tl.from('.btn', { // Target the button using its class
    y: -20,
    opacity: 0,
    duration: .3
});

tl.from('span', {
    y: 20,
    opacity: 0,
    duration: 1,
    stagger: .3
});

gsap.from('.box', {
    scale:0,
    rotate:360,
    scrollTrigger:{
        trigger:'.box',
        scroller:'body',
        scrub:1

    }
});
