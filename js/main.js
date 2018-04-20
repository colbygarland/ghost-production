jQuery(window).bind("load", function() {
  'use strict';
  jQuery(function($) {

    $('.slider').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true
    });

  });
});
