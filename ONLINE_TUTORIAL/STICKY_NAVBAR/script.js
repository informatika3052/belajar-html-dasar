let header1 = document.querySelector('header');

window.addEventListener('scroll', function () {
    header1.classList.toggle("sticky", window.screenY > 0);


});