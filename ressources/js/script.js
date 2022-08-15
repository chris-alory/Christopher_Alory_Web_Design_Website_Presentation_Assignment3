
function openNav() {

    let toggler = document.querySelector('.menu-mobile');

    let navigation = document.querySelector('.mobile-nav');

    toggler.onclick = function () {
        navigation.classList.toggle('open');
    }

}
openNav();