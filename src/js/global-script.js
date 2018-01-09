// Если на проекте jQuery

$(document).ready(function ($) {
  var myHeaderSwiper = new Swiper('.top-slider', {
    speed: 400,
    spaceBetween: 0,
    effect: 'slide',
    grabCursor: true,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  });

  var newsSwiper = new Swiper('.news__slides', {
    roundLengths: true,
    speed: 400,
    slidesPerView: 3,
    spaceBetween: 20,
    //centeredSlides: true,
    pagination: {
      el: '.news__slide-num',
      type: 'fraction',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: false,
      draggable: true,
    },
    breakpoints: {
      767: {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 20
      },
      1199: {
        slidesPerView: 2,
        // centeredSlides: true,
        spaceBetween: 20
      }
    },
    effect: 'slide',
    grabCursor: true,
    loop: true
  });
});

// Изоляция без jQuery
// (function(){
//
// }());

// На проекте нет jQuery, но хочется $( document ).ready...
// function ready(fn) {
//   if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', fn);
//   }
// }
//
// ready(function(){
//   // code
// });
