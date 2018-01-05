// Если на проекте jQuery

/*jQuery(document).ready(function ($) {
  var options = {
    $ArrowNavigatorOptions: {
      $Class: $JssorArrowNavigator$,
      $ChanceToShow: 2
    }
  };
  var jssor_slider1 = new $JssorSlider$('slider1_container', options);
});*/

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
