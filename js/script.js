// jQuery materializecss penulisannya berbeda jika mengukan option tertentu dan tanpa option
//Button Adroid agar berfungsi
$(document).ready(function () {
  $('.sidenav').sidenav();
});

//Slide layar agar berfungsi penulisan jika mengunakan option
$(document).ready(function () {
  var options = {
    indicators: false,
    height: 500,
    transition: 600,
    interval: 3000
  }
  $('.slider').slider(options);
});

//parallax
$(document).ready(function () {
  $('.parallax').parallax();
});

//Portfolio Image from zoom materialboxed
$(document).ready(function () {
  $('.materialboxed').materialbox();
});

//dropdown Button Submenu icon aplikasi agar aktif
$(document).ready(function () {
  $(".dropdown-trigger").dropdown();
});

// Scrollspy from materializecss u/ scroll yang pelan agar fungsi, penulisan mengunakan option
$(document).ready(function () {
  var options = {
    scrollOffset: 20,
    throttle: 200
  }
  $(".scrollspy").scrollSpy(options);
});