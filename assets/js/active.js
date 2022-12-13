(function ($) {
  ("use strict");

  $(document).ready(function ($) {
    /** Counter Js **/
    $(".counter").counterUp({
      delay: 10,
      time: 1000,
    });

    /** Slicknav **/
    $(".mainmenu").slicknav({
      prependTo: ".responsive-menu",
    });
  });

  jQuery(window).load(function () {
    $(".discover-preloader-wrapper").fadeOut("500");
  });
})(jQuery);
