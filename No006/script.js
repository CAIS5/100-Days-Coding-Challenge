const faces = Array.from(document.querySelectorAll('.face'));
const diceFace = document.querySelector('#dice-face');
const dice = document.querySelector('.dice');

dice.addEventListener("click", event => {

    if (event.target.classList[0] == 'face') {

        let currentValue = event.target.getAttribute('value') - 1;
        let  num = randomNumber(0, 6);

        while (num == currentValue) {
            num = randomNumber(0, 6);
        }

        event.target.classList.remove('active');
        faces[num].classList.add('active');

        diceFace.innerHTML = num + 1;
    }
})




function randomNumber(min, max) {
    return Math.floor(Math.random() * max) + min;
}
