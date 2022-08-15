function openZoom() {

    let toggler = document.querySelector('.zoom-in');

    let navigation = document.querySelector('.zoom-img');

    let toggler2 = document.querySelector('.zoom-in2');

    let navigation2 = document.querySelector('.zoom-img2');

    let toggler3 = document.querySelector('.zoom-in3');

    let navigation3 = document.querySelector('.zoom-img3');

    let toggler4 = document.querySelector('.zoom-in4');

    let navigation4 = document.querySelector('.zoom-img4');

    let toggler5 = document.querySelector('.zoom-in5');

    let navigation5 = document.querySelector('.zoom-img5');

    let toggler6 = document.querySelector('.zoom-in6');

    let navigation6 = document.querySelector('.zoom-img6');

    let toggler7 = document.querySelector('.zoom-in7');

    let navigation7 = document.querySelector('.zoom-img7');

    let toggler8 = document.querySelector('.zoom-in8');

    let navigation8 = document.querySelector('.zoom-img8');

    if (toggler != null) {
    toggler.onclick = function () {
        navigation.classList.add('active');
    }}

    if (toggler2 != null) {
    toggler2.onclick = function () {
        navigation2.classList.add('active');
    }}

    if (toggler3 != null) {
    toggler3.onclick = function () {
        navigation3.classList.add('active');
    }}

    if (toggler4 != null) {
        toggler4.onclick = function () {
            navigation4.classList.add('active');
        }
    }

    if (toggler5 != null) {
    toggler5.onclick = function () {
        navigation5.classList.add('active');
    }}

    if (toggler6 != null) {
    toggler6.onclick = function () {
        navigation6.classList.add('active');
    }}

    if (toggler7 != null) {
    toggler7.onclick = function () {
        navigation7.classList.add('active');
    }}

    if (toggler8 != null) {
    toggler8.onclick = function () {
        navigation8.classList.add('active');
    }
}
}
openZoom();

function closeZoom() {

    let cross = document.querySelector('.zoom-close');

    let fenetre = document.querySelector('.zoom-img');

    let cross2 = document.querySelector('.zoom-close2');

    let fenetre2 = document.querySelector('.zoom-img2');

    let cross3 = document.querySelector('.zoom-close3');

    let fenetre3 = document.querySelector('.zoom-img3');

    let cross4 = document.querySelector('.zoom-close4');

    let fenetre4 = document.querySelector('.zoom-img4');

    let cross5 = document.querySelector('.zoom-close5');

    let fenetre5 = document.querySelector('.zoom-img5');

    let cross6 = document.querySelector('.zoom-close6');

    let fenetre6 = document.querySelector('.zoom-img6');

    let cross7 = document.querySelector('.zoom-close7');

    let fenetre7 = document.querySelector('.zoom-img7');

    let cross8 = document.querySelector('.zoom-close8');

    let fenetre8 = document.querySelector('.zoom-img8');

    if (cross != null) {
    cross.onclick = function () {
        fenetre.classList.remove('active');
    }}

    if (cross2 != null) {
    cross2.onclick = function () {
        fenetre2.classList.remove('active');
    }}

    if (cross3 != null) {
    cross3.onclick = function () {
        fenetre3.classList.remove('active');
    }}

    if (cross4 != null) {
    cross4.onclick = function () {
        fenetre4.classList.remove('active');
    }}

    if (cross5 != null) {
    cross5.onclick = function () {
        fenetre5.classList.remove('active');
    }}

    if (cross6 != null) {
    cross6.onclick = function () {
        fenetre6.classList.remove('active');
    }}

    if (cross7 != null) {
    cross7.onclick = function () {
        fenetre7.classList.remove('active');
    }}

    if (cross8 != null) {
    cross8.onclick = function () {
        fenetre8.classList.remove('active');
    }}
}
closeZoom();