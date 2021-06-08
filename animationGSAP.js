// import {gsap} from 'gsap'
// import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const sections = document.querySelectorAll('section')
const hambMenu = document.querySelector('.hamburger')
const menuItems = document.querySelectorAll('.menu__list')

console.log(sections);

sections.forEach(section =>{
    gsap.fromTo(section.children, {y: '+=100', opacity: 0}, {y: 0, opacity: 1, stagger: 0.2, duration: 1,ease: 'easeInOut', scrollTrigger: {
        trigger: section,
        start: 'top 40%',
        toggleActions: 'play complete none reverse',
    }})
    // gsap.fromTo(section[2], {x: '+=500', opacity: 0}, {x: 0, opacity: 1, duration: 2, })
})
let isActive = true
hambMenu.addEventListener('click', ()=>{
        menuTL.restart()
})

let menuTL = gsap.timeline()
    menuTL.set(menuItems, {autoAlpha: 0})
    menuTL.fromTo(menuItems[0], {y: '+=500'}, {y: 0, autoAlpha: 1, duration: 1, ease: 'back'})
    menuTL.fromTo(menuItems[1], {y: '+=500'}, {y: 0, autoAlpha: 1, duration: 1, ease: 'back', }, '-=0.75')
    menuTL.fromTo(menuItems[2], {y: '+=500'}, {y: 0, autoAlpha: 1, duration: 1 , ease: 'back', }, '-=0.75')
    menuTL.fromTo(menuItems[3], {y: '+=500'}, {y: 0, autoAlpha: 1, duration: 1 , ease: 'back', }, '-=0.75')