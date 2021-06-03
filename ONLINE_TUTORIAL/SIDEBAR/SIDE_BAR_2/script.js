const tombol = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');

tombol.addEventListener('click', function () {
    tombol.classList.toggle('active');
    navigation.classList.toggle('active');
})
const lilili = document.querySelectorAll('.navigation ul li');

lilili.forEach(element => {
    element.addEventListener('mouseover', function () {
        element.style.background = "white";
        element.lastElementChild.style.color = "rgb(2, 94, 40)";
        element.lastElementChild.firstElementChild.style.color = "rgb(2, 94, 40)";
    });
});
lilili.forEach(element => {
    element.addEventListener('mouseout', function () {
        element.style.background = "rgb(2, 94, 40)";
        console.log(element);
        element.lastElementChild.style.color = "white";
        element.lastElementChild.firstElementChild.style.color = "white";
    });
});


