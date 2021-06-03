const bg = document.querySelector('.bg');
const bird = document.querySelector('.bird');
const content = document.querySelector('.content');

document.addEventListener('mousemove', function (e) {
    // berfungsi untuk memperbesar dan memperkecil gamabar background belakangg
    bg.style.width = 100 + e.pageX / 100 + '%';
    bg.style.height = 100 + e.pageX / 100 + '%';
    // console.log(bg);

    // merubah posisi dari bird
    bird.style.right = 100 + e.pageX / 2 + 'px';
    console.log(bird);

    // merubah posisi dari content
    content.style.left = 100 + e.pageX / 2.5 + 'px';
    console.log(bird);

})