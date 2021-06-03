document.addEventListener("mousemove", parallax);

function parallax(evt) {
    this.querySelectorAll(".layer").forEach(layer => {
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - evt.pageX * speed) / 80
        const y = (window.innerHeight - evt.pageY * speed) / 80


        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    });
}