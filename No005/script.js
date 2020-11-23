const btns = document.querySelectorAll('.btn');
const [b1 , b2] = btns;

const setup = document.querySelector('.setup')
const punchline = document.querySelector('.punchline')

b1.addEventListener('click',e =>{
    if(b2.classList.contains('btnClicked') ||
    punchline.classList.contains('hightlight')){
        b2.classList.remove('btnClicked')
        punchline.classList.remove('hightlight')
    }
    b1.classList.add('btnClicked')
    setup.classList.add('hightlight')
})

b2.addEventListener('click',e =>{
    if(b1.classList.contains('btnClicked') ||
    setup.classList.contains('hightlight')){ 
        b1.classList.remove('btnClicked')
        setup.classList.remove('hightlight')
    }
    b2.classList.add('btnClicked')
    punchline.classList.add('hightlight')
})



