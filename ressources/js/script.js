
function openNav() {

    let toggler = document.querySelector('.menu-mobile');

    let navigation = document.querySelector('.mobile-nav');

    toggler.onclick = function () {
        navigation.classList.toggle('open');
    }

}
openNav();

function openZoom() {

    let toggler = document.querySelector('.zoom-in');

    let navigation = document.querySelector('.zoom-img');

    let toggler2 = document.querySelector('.zoom-in2');

    let navigation2 = document.querySelector('.zoom-img2');

    toggler.onclick = function () {
        navigation.classList.add('active');
    }

    toggler2.onclick = function () {
        navigation2.classList.add('active');
    }
}
openZoom();

function closeZoom() {

    let cross = document.querySelector('.zoom-close');

    let fenetre = document.querySelector('.zoom-img');

    let cross2 = document.querySelector('.zoom-close2');

    let fenetre2 = document.querySelector('.zoom-img2');

    cross.onclick = function () {
        fenetre.classList.remove('active');
    }

    cross2.onclick = function () {
        fenetre2.classList.remove('active');
    }
}
closeZoom();