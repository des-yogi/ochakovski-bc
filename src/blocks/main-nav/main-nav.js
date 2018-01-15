(function(){

  var burger = document.querySelector('#burger');
  var mainNav = document.querySelector('.main-nav');
  var body = document.querySelector('body');

  var openMenuHandler = function () {
    mainNav.classList.add('main-nav--open');
  }

  var closeMenuHandler = function () {
    mainNav.classList.remove('main-nav--open');
  }

  var burgerClickHandler = function (e) {
    e.preventDefault();
    // burger.classList.toggle('burger--close'); // модификатор иконки (должен быть .burger)

    if (!mainNav.classList.contains('main-nav--open')) {
      openMenuHandler();
      body.classList.add('no-scroll');
    } else {
        closeMenuHandler();
        body.classList.remove('no-scroll');
    }
  };

  if (burger) {
    burger.addEventListener('click', burgerClickHandler);
  }

}());
