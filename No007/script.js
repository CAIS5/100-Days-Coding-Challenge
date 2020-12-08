const urls = ['https://images.unsplash.com/photo-1606644747534-f21b1e85b756?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
'https://images.unsplash.com/photo-1496794795115-3247c050b08e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1267&q=80',
'https://images.unsplash.com/photo-1416163026265-0bc340a710e4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80'
]



const imgs = document.querySelectorAll('img')
let i = 0;

for(let img of imgs){
    img.src = urls[i]
    i++;

    img.addEventListener('mouseover', event => {
        document.querySelector('body').style.backgroundImage = `url(${img.src})`;
        console.log(img.src)
    })
}
