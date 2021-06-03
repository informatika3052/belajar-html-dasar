
// CARA PERTAMA
// parallax bisa dilakukan hanya dengan memberi style pada element menggunakan posisi absolute ataupun relative


let bg = document.querySelector('.bg');
let moon = document.querySelector('.moon');
let mountain = document.querySelector('.mountain');
let road = document.querySelector('.road');
let text = document.querySelector('.text');




window.addEventListener('scroll', function () {
    let value = window.scrollY;
    console.log(value);
    bg.style.top = value * 0.5 + 'px';
    moon.style.left = -value * 0.5 + 'px';
    mountain.style.top = -value * 0.15 + 'px';
    road.style.top = value * 0.15 + 'px';
    text.style.top = value * 1 + 'px';
})


// CARA KEDUA

// let bg = document.querySelector('.bg');
// let moon = document.querySelector('.moon');
// let mountain = document.querySelector('.mountain');
// let road = document.querySelector('.road');
// let text = document.querySelector('.text');

// function parallax(element, distance, speed) {
//     const item = document.querySelector(element);
//     item.style.top = `${distance * speed}px`;
//     moon.style.left = `-${distance * speed}px`;
//     // moon.style.left = `translateY(${distance * speed}px)`;
//     // mountain.style.top = `translateY(${distance * speed}px)`;
//     // road.style.top = `translateY(${distance * speed}px)`;
//     // text.style.top = `translateY(${distance * speed}px)`;
// }


// window.addEventListener('scroll', function () {
//     let value = window.scrollY;
//     parallax('.bg', value, 0.2);
//     parallax('.moon', value, 0.5);
//     parallax('.mountain', value, 0.13);
//     parallax('.road', value, 0.2);
//     parallax('.text', value, 1);
// })