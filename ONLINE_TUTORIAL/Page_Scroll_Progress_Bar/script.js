let progress = document.querySelector('.progress-bar');
// tangkap class di html


let totalHeight = document.body.scrollHeight - window.innerHeight;



// ketika halaman di scroll jalankan fungsi berikut 

// (tinggi halaman dibagi dengan tinggti total) lalu dikali 100
//tambahkan style height 100%

window.onscroll = function () {
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}