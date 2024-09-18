const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navlist.classList.toggle("open");
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove("open");
};

const sr = ScrollReveal ({
    distance: '200px',
    duration: 1500,
    reset: true
})

sr.reveal('.home-text',{delay:200, origin:'bottom'})

sr.reveal('.category,.cta,.new#promo,.new#rekomendasi,.new-content-2,.cta-2,.contact',{delay:200, origin:'bottom'})