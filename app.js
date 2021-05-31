const hamb = document.querySelector('.hamburger')
const menu = document.querySelector('.menu')
const backBtn = document.querySelector('.back')
hamb.addEventListener('click', ()=>{
    hamb.classList.toggle('active')
    menu.classList.toggle('showed')
})
const placeholder = document.querySelector('.placeholder')
const btn = document.querySelector('.btnPost')
const hovers = document.querySelectorAll('.hover')
const imgs = document.querySelectorAll('.cover')


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
