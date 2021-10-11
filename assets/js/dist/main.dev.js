"use strict";

$(window).on("load resize", function () {
  var windowWidth = $(window).width();
  var swiper = new Swiper(".swiper", {
    slidesPerView: windowWidth <= 425 ? 2 : windowWidth <= 768 ? 3 : windowWidth <= 992 ? 5 : 6,
    spaceBetween: 30
  });
});