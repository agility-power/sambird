$(function () {

    var mixer = mixitup('.gallery__wrapper', {
        load: {
            filter: '.glass-bottels'
        },
        animation: {
            effectsOut: 'fade translateY(-100%)'
        }
    })
    $('.slider__items').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true,
        cssEase: 'linear',
        autoplaySpeed: 10000,
        speed: 3000,
        arrows: false,
        dots: true,
    })

})

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let menuItem = document.querySelectorAll('.menu__item');

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('menu-btn--active');
    menu.classList.toggle('menu--active');
})


menuItem.forEach(function (menuItem) {
    menuItem.addEventListener('click', function () {
        menuBtn.classList.toggle('menu-btn--active');
        menu.classList.toggle('menu--active');
    })
})