let section = document.querySelector('section');
let text = document.querySelector('.text');
let innerText = document.querySelector('.innerText');
window.addEventListener('scroll', function () {
    let value = window.scrollY;
    console.log(value);
    section.style.clipPath = "circle(" + value + "px at center center)";
    text.style.left = 100 - value / 5 + '%';
    innerText.style.left = 100 - value / 5 + '%';
});