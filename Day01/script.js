const thumbnails = Array.from(document.querySelectorAll('.thumbnail'));

thumbnails.forEach(pic => {
    let isEnlarge = false;
    pic.addEventListener('click', event => {
        let p = event.target;
        let x = event.target.x;
        let y = event.target.y;
        if (! isEnlarge) {
            p.style.position = 'absolute';
            p.style.x = 5 + 'px';
            p.style.y = 5 + 'px';
            p.style.width = 380 + 'px';
            p.style.height = 380 + 'px';
            isEnlarge = true;
        } else {
            p.style.position = '';
            p.style.x = x + 'px';
            p.style.y = y + 'px';
            p.style.width = 120 + 'px';
            p.style.height = 120 + 'px';
            isEnlarge = false;
        }
    })
})
