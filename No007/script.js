const SLIDER = document.querySelector('.slider');

async function getPhotos() {
    let response = await fetch("photos.json");
    let photos = await response.json();
    console.log(photos);
    return photos;
}

function getPhotosHtml(photos) {
    let myPhotosHtml = photos.map(photo => {
        return `<img class="my-photo" src="https://picsum.photos/id/${photo.id}/400/400" alt="${photo.title}"/>`
    }).join('')
    
    return `<div class="my-photos">${myPhotosHtml}</div>`   
}

getPhotos().then(photos => {
    SLIDER.innerHTML = 
    `<div class="my-gallery">
        ${getPhotosHtml(photos)}
    </div>`;
    const center = document.querySelector('.center')
    const images = Array.from(document.querySelectorAll('.my-photo'));
//default photo;
    center.style.background = `url(${images[2].src})`;
    let title = `<h3 id="img-title">${images[2].alt}</h3>`;
    center.innerHTML = title;

   images.forEach(img => {
       img.addEventListener('click', e => {
           let src = e.target.src;
           title = `<h3 id="img-title">${e.target.alt}</h3>`;
           center.style.background = `url(${src})`;
           center.innerHTML = title;
       });
 
   });
})