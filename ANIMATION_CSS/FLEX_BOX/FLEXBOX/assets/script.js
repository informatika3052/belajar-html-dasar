const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
});




const color = [
    '#2196f3',
    '#e91e63',
    '#ffeb3b',
    '#74ff1d'
]
function createSquare() {
    const section = document.querySelector('.content-1');
    const square = document.createElement('p');

    let size = Math.random() * 50;

    square.style.width = 20 + size + 'px';
    square.style.height = 20 + size + 'px';

    square.style.top = Math.random() * innerHeight + 'px';
    square.style.left = Math.random() * innerWidth + 'px';

    const bg = color[Math.floor(Math.random() * color.length)];

    square.style.background = bg;


    section.appendChild(square);
    setTimeout(() => {
        square.remove()

    }, 5000)

}

setInterval(createSquare, 150);





// button scroll top

mybutton = document.getElementById("myBtn");

// Dimana saat user scroll halaman kebawah setinggi 20px ,akan menampilkan button scoll top
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";


    } else {
        mybutton.style.display = "none";
    }

}


function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

}