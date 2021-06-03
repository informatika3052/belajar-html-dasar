const tombol = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');

tombol.addEventListener('click', function () {
    tombol.classList.toggle('active');
    navigation.classList.toggle('active');
})