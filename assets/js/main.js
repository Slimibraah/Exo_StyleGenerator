//plan
let plan = document.querySelector('.plan')
// 1
let blanc = document.querySelector('.btn-grey')
let rouge = document.querySelector('.btn-danger')
let vert = document.querySelector('.btn-success')
let bleu = document.querySelector('.btn-primary')
let choisir = document.querySelector('.choisir')

//Colors

blanc.addEventListener('click', ()=>{
    plan.style.backgroundColor = '#FFFFFF'
})

rouge.addEventListener('click', ()=>{
    plan.style.backgroundColor = '#990000'
})

vert.addEventListener('click', ()=>{
    plan.style.backgroundColor = '#33CC33'
})

bleu.addEventListener('click', ()=>{
    plan.style.backgroundColor = '#0066FF'
})

choisir.addEventListener('click', ()=> {
    plan.style.backgroundColor = choisir.value
})
//borders

let borderfull = document.querySelector('.borderfull')
let dottedb  = document.querySelector('.dottedb')
let radi = document.querySelector('.radi')

borderfull.addEventListener('click', ()=>{
    plan.style.border = 'thick solid black'
})

dottedb.addEventListener('click', ()=>{
    plan.style.border = 'dashed 5px'
})

radi.addEventListener('click', ()=>{
    plan.style.border = ''
})

let topVide = document.querySelector('.top0')
let top1 = document.querySelector('.semired')
let top2 = document.querySelector('.moitiered')

topVide.addEventListener('click', ()=>{
    plan.style.borderTop = ''
})

top1.addEventListener('click', ()=>{
    plan.style.borderTop = 'solid red'
})

top2.addEventListener('click', ()=>{
    plan.style.borderTop = 'solid red 8px'
})

//size

let ipt1 = document.querySelector('.ipt1')
let ipt2 = document.querySelector('.ipt2')
let ipt3 = document.querySelector('.ipt3')
let ipt4 = document.querySelector('.ipt4')
let ipt5 = document.querySelector('.ipt5')

//Bordure changement
ipt1.addEventListener('click', ()=>{
    plan.style.border = `solid black ${ipt1.value}px`
})
ipt2.addEventListener('click', ()=>{
    plan.style.borderTop = `solid black ${ipt2.value}px`
})
ipt3.addEventListener('click', ()=>{
    plan.style.borderRight = `solid black ${ipt3.value}px`
})
ipt4.addEventListener('click', ()=>{
    plan.style.borderBottom = `solid black ${ipt4.value}px`
})
ipt5.addEventListener('click', ()=>{
    plan.style.borderLeft = `solid black ${ipt5.value}px` 
})

//Border radi

let ipt6 = document.querySelector('.ipt6')
let ipt7 = document.querySelector('.ipt7')
let ipt8 = document.querySelector('.ipt8')
let ipt9 = document.querySelector('.ipt9')
let ipt10 = document.querySelector('.ipt10')

ipt6.addEventListener('click', ()=>{
    plan.style.borderRadius = `${ipt6.value}px`
})
ipt7.addEventListener('click', ()=>{
    plan.style.borderTopLeftRadius = `${ipt7.value}px`
})
ipt8.addEventListener('click', ()=>{
    plan.style.borderTopRightRadius = `${ipt8.value}px`
})
ipt9.addEventListener('click', ()=>{
    plan.style.borderBottomRightRadius = `${ipt9.value}px`
})
ipt10.addEventListener('click', ()=>{
    plan.style.borderBottomLeftRadius = `${ipt10.value}px`
})