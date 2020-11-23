// const skull = [110, 111,
//     129, 130, 131,
//      132, 148, 149, 150, 151, 152,
//       153, 167, 168, 170, 171, 173,
//        174, 187, 188, 189, 190, 191, 192, 193,
//         194, 209,
//         212, 228, 230, 231,
//         233, 247, 249, 252, 254];

//const skull = [109,110,128,129,130,131,147,148,149,150,151,152,166,167,169,170,172,173,186,187,188,189,190,191,192,193,208,211,227,229,230,232,246,248,251,253];

const skull = [129,130,148,149,150,151,167,168,169,170,171,172,186,187,189,190,192,193,206,207,208,209,210,211,212,213,228,231,247,249,250,252,266,268,271,273]
const pixel = [21,41,61,81,101,22,43,62,25,45,65,85,105,27,48,69,90,111,107,88,50,31,33,34,35,53,73,93,113,114,115,74,37,57,77,97,117,118]




const grid = document.querySelector(".pixels");

const pixels = [];

createGrid(400);

function createGrid(size = 10) {
    for (let i = 0; i < size; i++) {
        // create element
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        grid.appendChild(pixel);
        // push it into a new squares array
        pixels.push(pixel);
    }
}

skull.forEach((i) => pixels[i].classList.toggle("selected"));
pixel.forEach(i => pixels[i].classList.toggle('selected'));


pixels.forEach(p => {
    p.addEventListener('click',e => {
            e.target.classList.toggle("selected");
    })
})
