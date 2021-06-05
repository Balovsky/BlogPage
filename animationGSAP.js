// import {gsap} from 'gsap'
// import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const sections = document.querySelectorAll('section')



// console.log(sections);

sections.forEach(section =>{
    gsap.fromTo(section.children, {y: '+=100', opacity: 0}, {y: 0, opacity: 1, stagger: 0.2, duration: 1,ease: 'easeInOut', scrollTrigger: {
        trigger: section,
        start: 'top 40%',
        toggleActions: 'play complete none reverse',
    }})
    // gsap.fromTo(section[2], {x: '+=500', opacity: 0}, {x: 0, opacity: 1, duration: 2, })
})

let tl = gsap.timeline()

// tl.fromTo('.post__column',{x: '+=500', opacity: 0}, {x: 0, opacity: 1, duration: 2, }, '+=3.5')
// tl.fromTo('.post__column3',{x: '-=500', opacity: 0}, {x: 0, opacity: 1, duration: 2}, '-=2')
