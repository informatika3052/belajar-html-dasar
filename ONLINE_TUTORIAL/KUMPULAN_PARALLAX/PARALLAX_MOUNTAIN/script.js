
// LAYER 1

const layer1 = document.getElementById('layer1');

scroll = window.pageYOffset;

document.addEventListener('scroll', function (e) {
    let offset = window.pageYOffset;
    scroll = offset;
    layer1.style.width = (100 + scroll / 5) + '%'

});

// LAYER 2


const layer2 = document.getElementById('layer2');


document.addEventListener('scroll', function (e) {
    let offset = window.scrollY;
    scroll = offset;
    layer2.style.width = (100 + scroll / 5) + '%'
    layer2.style.left = scroll / 50 + '%';

});

// TEXT


const text = document.getElementById('text');

scroll = window.pageYOffset;

document.addEventListener('scroll', function () {
    let offset = window.pageYOffset;
    scroll = offset;
    // layer2.style.width = (100 + scroll / 5) + '%'
    text.style.top = - scroll / 10 + '%';

});