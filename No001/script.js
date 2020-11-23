const thumbnails = Array.from(document.querySelectorAll('.thumbnail'));

thumbnails.forEach(pic => {
    pic.addEventListener('click', event => {
        event.target.classList.toggle('enlarge');
    })
})
