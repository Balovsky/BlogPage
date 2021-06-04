const hamb = document.querySelector('.hamburger')
const menu = document.querySelector('.menu')
const backBtn = document.querySelector('.back')
const placeholder = document.querySelector('.placeholder')
const btn = document.querySelector('.btnPost')
const hovers = document.querySelectorAll('.hover')
const imgs = document.querySelectorAll('.cover')
const cookiesBtn = document.querySelector('.cookie__btn')
const shadowBG = document.querySelector('.shadow')
const cookiesBanner = document.querySelector('.cookies')
const sendBtn = document.querySelector('.sendBtn')
const preloader = document.querySelector('.loader')

window.addEventListener('load', ()=>{
    preloader.style.display = 'none'
    preloader.style.zIndex = '-1'
})

console.log(sendBtn);
hamb.addEventListener('click', ()=>{
    hamb.classList.toggle('active')
    menu.classList.toggle('showed')
})
// imgs.forEach(img =>{
//     img.classList.remove('open')
//     img.addEventListener('mouseenter', ()=>{
//         let a = img.parentElement
//         let hover = a.children[0]
//         hover.classList.add('open')
//     })
//     hovers.forEach(hover =>{
//         hover.addEventListener('mouseleave', ()=>{
//             hover.classList.remove('open')
//         })
//     })
// })

const lis = document.querySelectorAll('.menu__list')

lis.forEach(li =>{
    li.addEventListener('click', (e)=>{
 let parent = e.currentTarget.parentElement.parentElement
        parent.classList.remove('showed')
        hamb.classList.remove('active')
    })
})

window.addEventListener('scroll', ()=>{
    const scrollHeight = scrollY
    if( scrollHeight>0){
        backBtn.classList.add('showedArrow')
    }else if(scrollHeight === 0){
        backBtn.classList.remove('showedArrow')
    }
})

if ("ontouchstart" in document.documentElement)
{
    imgs.forEach(img =>{
        img.classList.remove('open')
        img.addEventListener('touchstart', ()=>{
            let a = img.parentElement
            let hover = a.children[0]
            hover.classList.add('open')
        })
        hovers.forEach(hover =>{
            hover.addEventListener('touchend', ()=>{
                hover.classList.remove('open')
            })
        })
    })
}
else
{
    imgs.forEach(img =>{
        img.classList.remove('open')
        img.addEventListener('mouseenter', ()=>{
            let a = img.parentElement
            let hover = a.children[0]
            hover.classList.add('open')
        })
        hovers.forEach(hover =>{
            hover.addEventListener('mouseleave', ()=>{
                hover.classList.remove('open')
            })
        })
    })
}
 

console.log(shadowBG);
cookiesBtn.addEventListener('click', ()=>{
        shadowBG.classList.add('hide')
        cookiesBtn.parentElement.classList.add('hide')
        localStorage.setItem('cookiesAccept', 'true')
})

setTimeout(() => {
    if(!localStorage.getItem('cookiesAccept')){
        shadowBG.classList.add('show__shadow')
        cookiesBanner.classList.add('cookiesBanner')
    }
}, 2000); 

// localStorage.removeItem('cookiesAccept')