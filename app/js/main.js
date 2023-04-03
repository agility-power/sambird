$(function () {

    var mixer = mixitup('.gallery__wrapper', {
        load: {
            filter: '.Glass-Bottels'
        },
        animation: {
            effectsOut: 'fade translateY(-100%)'
        }
    })
    $('.slider__items').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        // autoplay: true,
        // autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        fade: true,
    })

})