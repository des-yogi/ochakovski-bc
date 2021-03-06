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

  var partnersLogoSwiper = new Swiper('.partners__inner', {
    speed: 400,
    spaceBetween: 95,
    slidesPerView: 'auto',
    // centeredSlides: true,
    roundLengths: true,
    effect: 'slide',
    grabCursor: true,
    // loop: true,
    breakpoints: {
      767: {
        slidesPerView: 'auto',
        spaceBetween: 35,
        centeredSlides: false
      },
      1199: {
        slidesPerView: 'auto',
        spaceBetween: 60,
        centeredSlides: false
      }
    }
  });

  var actionSwiper = new Swiper('.action-slider', {
    speed: 400,
    spaceBetween: 20,
    slidesPerView: 3,
    // centeredSlides: true,
    roundLengths: true,
    effect: 'slide',
    grabCursor: true,
    loop: true,
    breakpoints: {
      767: {
        slidesPerView: 'auto',
        spaceBetween: 20,
        centeredSlides: true
      },
      1199: {
        slidesPerView: 2,
        spaceBetween: 20,
        centeredSlides: false
      }
    }
  });

  var carwashMenuSwiper = new Swiper('.car-wash__menu', {
    speed: 400,
    spaceBetween: 120,
    slidesPerView: 4,
    centeredSlides: false,
    roundLengths: true,
    effect: 'slide',
    grabCursor: false,
    // loop: true,
    breakpoints: {
      767: {
        slidesPerView: 'auto',
        spaceBetween: 60,
        centeredSlides: true
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 60,
        centeredSlides: false
      }
    }
  });

  var screenWidth = document.documentElement.clientWidth;
  // var router = document.querySelector('main').dataset;
  // var initSlide = parseInt(router.router, 10);

  if (screenWidth >= 768) { return; }

  var initialSlide = getSlideNum (siteParameters);

  var serviceMenuSwiper = new Swiper('.service-menu__inner', {
    speed: 400,
    initialSlide: initialSlide,
    spaceBetween: 60,
    slidesPerView: 1,
    centeredSlides: true,
    effect: 'flip',

    navigation: {
      nextEl: '.service-menu__btn-link--next',
      prevEl: '.service-menu__btn-link--prev',
    }

  });

  function getSlideNum (param) {

    var initSlideNum = 0;

    if (param.pages.currentPage === '/parking') {
      initSlideNum = 0;
    }

    if (param.pages.currentPage === '/carwash') {
      initSlideNum = 1;
    }

    return initSlideNum;
  };

  /*if (router.dataset == '0') {
    serviceMenuSwiper.slideTo(0);
  } else if (router.dataset == '1') {
      serviceMenuSwiper.slideTo(1);
  } return;*/

});

$(document).ready(function ($) {

  var timepicker = document.querySelector('.timepicker');

  if (timepicker) {
    $('.timepicker').timepicker();
  }

});


$( document ).ready(function() {

  $('.fancybox').fancybox({
      padding: 0,
      openEffect: 'elastic',
      protect: true,
      animationEffect : "zoom",
      helpers:  {
        overlay: {
            css: {
                'background' : 'rgba(0,0,0,0.6)'
            }
        }
      }
  });

});

(function(){

  /*function getSubDocument(embedding_element) {

    if (embedding_element.contentDocument) {
      return embedding_element.contentDocument;
    } else {
      var subdoc = null;
      try {
        subdoc = embedding_element.getSVGDocument();
      } catch(e) {}
      return subdoc;
    }
  }*/


  function selectPlace (elem) {
    var orderForm = document.querySelector('.service-item__order-form');
    elem.setAttribute('pointer-events', 'auto');
    elem.style.fill = '#303030';
    orderForm.style.display= 'block';
    //elem.setAttribute('fill', '#303030');
  };

  function findSVGElements (e) {

    if (!document.querySelector("#parking-svg")) {
      return;
    }

    var svg = document.querySelector("#parking-svg").contentDocument;
    var placeBlock = svg.querySelector("#places");
    var item = placeBlock.children;

    [].forEach.call(item, function(elem) {
      elem.setAttribute('fill', '#DBDBDB');
      elem.setAttribute('cursor', 'pointer');
      // elem.setAttribute('pointer-events', 'none');

      elem.addEventListener('click', function (e) {
        selectPlace (this);
      });

      item['10'].setAttribute('fill', '#93E376');
      item['41'].setAttribute('fill', '#93E376');
      item['36'].setAttribute('fill', '#93E376');
      item['37'].setAttribute('fill', '#93E376');
      item['1'].setAttribute('fill', '#93E376');

      if (item['place-14']) item['place-14'].setAttribute('fill', 'red');

    });

  }

  window.addEventListener("load", findSVGElements, false);

}());

(function(){

  var carwashChooseBtn = document.querySelector(".btn-submit--carwash");
  var carwashOrderForm = document.querySelector(".car-wash__order-form");

  function carwashChooseBtnHandler (e) {
    carwashChooseBtn.style.display= 'none';
    carwashOrderForm.style.display= 'block';
  };

  if (!carwashChooseBtn) {
    return;
  }

  carwashChooseBtn.addEventListener('click', carwashChooseBtnHandler);

}());

(function(){

  var loginBtn = document.querySelector('.user-nav__link');

  if (!loginBtn) {
    return;
  } else {
    loginBtn.addEventListener('click', function(e) {
      loginBtn.classList.toggle('active');
    });
  }

}());


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
