const btns = document.querySelectorAll('.btn');
const [b1, b2] = btns;

const setup = document.querySelector('.setup');
const punchline = document.querySelector('.punchline');

getJokes();

let joke;

async function getJokes() {
    const jokePromise = await fetch('https://official-joke-api.appspot.com/jokes/programming/random');

    if (jokePromise.ok) {
        const data = await jokePromise.json();
        setup.innerHTML = data[0].setup;
        joke = data[0]
    } else {
        console.error(`Error : ${
            jokePromise.status
        }`);
    }
}


b1.addEventListener('click', e => {
    getJokes();
    if (b2.classList.contains('btnClicked') || setup.classList.contains('hightlight')) {
        b2.classList.remove('btnClicked');
        setup.classList.remove('hightlight');
    }
    b1.classList.add('btnClicked');
    punchline.classList.add('hightlight');
    updateSetup();
})


b2.addEventListener('click', e => {
    if (b1.classList.contains('btnClicked') || punchline.classList.contains('hightlight')) {
        b1.classList.remove('btnClicked');
        punchline.classList.remove('hightlight');
    }
    b2.classList.add('btnClicked');
    setup.classList.add('hightlight');
    updatePunchline();
})


function updateSetup() {
    setup.innerHTML = joke.setup;
    punchline.innerHTML = "";
}

function updatePunchline() {
    punchline.innerHTML = joke.punchline;
}
