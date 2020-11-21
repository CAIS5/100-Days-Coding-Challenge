const center = document.querySelector('.center');
const frame =  document.querySelector('.frame');
const circles = Array.from(document.querySelectorAll('.circle'));
console.log(center)

frame.addEventListener('click',event =>{
   frame.classList.toggle('isClicked');
   circles[0].classList.toggle('top');
   circles[1].classList.toggle('middle');
   circles[2].classList.toggle('bottom');

   circles[0].classList.toggle('shadow');
   circles[1].classList.toggle('shadow');
   circles[2].classList.toggle('shadow');
    //console.log(frame.classList)
})