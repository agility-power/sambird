$(function () {

  $('.top-slider__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    fade: true,
  })
  $('.product-slide__thumb').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    vertical: true,
    draggable: false,
    asNavFor: '.product-slide__big',
  })
  $('.product-slide__big').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    draggable: false,
    asNavFor: '.product-slide__thumb',
  });

  $('.blog-page__slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="7px" height="px" viewBox="0 0 7 11" version="1.1"><g><path d="M 0.90625 5.015625 C 0.632812 5.28125 0.632812 5.71875 0.90625 5.988281 L 4.40625 9.425781 C 4.679688 9.695312 5.125 9.695312 5.398438 9.425781 C 5.671875 9.15625 5.671875 8.71875 5.398438 8.453125 L 2.390625 5.5 L 5.394531 2.546875 C 5.667969 2.28125 5.667969 1.84375 5.394531 1.574219 C 5.121094 1.304688 4.675781 1.304688 4.402344 1.574219 L 0.902344 5.011719 Z M 0.90625 5.015625"/></g></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="7px" height="px" viewBox="0 0 7 11" version="1.1"><g> <path d="M 6.09375 5.015625 C 6.367188 5.28125 6.367188 5.71875 6.09375 5.988281 L 2.59375 9.425781 C 2.320312 9.695312 1.875 9.695312 1.601562 9.425781 C 1.328125 9.15625 1.328125 8.71875 1.601562 8.453125 L 4.609375 5.5 L 1.605469 2.546875 C 1.332031 2.28125 1.332031 1.84375 1.605469 1.574219 C 1.878906 1.304688 2.324219 1.304688 2.597656 1.574219 L 6.097656 5.011719 Z M 6.09375 5.015625"/></g></svg ></button>',
    infinite: false,
  });


  $('.shop-content__filter-btn').on('click', function () {
    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active ');
    $(this).addClass('shop-content__filter-btn--active');
  })
  $('.button-list').on('click', function () {
    $('.product-item').addClass('product-item--list');
  });
  $('.button-grid').on('click', function () {
    $('.product-item').removeClass('product-item--list');
  });


  $(".star").rateYo({
    rating: 3.6,
    starWitdh: "17px",
    normalFill: "#a0a0a0",
    ratedFill: "#ffc35b",
    readOnly: true,
  })



  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  })
  $('.select-style, .product-one__num').styler();

  $('.product-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  })

})