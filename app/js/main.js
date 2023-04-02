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
        arrows: false,
        dots: true,
        fade: true,
    })




    //   $('.product-tabs__top-item').on('click', function (e) {
    //     e.preventDefault();
    //     $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    //     $(this).addClass('product-tabs__top-item--active');

    //     $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    //     $($(this).attr('href')).addClass('product-tabs__content-item--active');
    //   })

})