(function ($) {
  "use strict";

  /**Accordion js**/
  $(document).ready(function ($) {
    $(".accordion-toggle").on("click", function (event) {
      event.preventDefault();
      var accordion = $(this);
      var accordionContent = accordion.next(".accordion-content");
      var accordionToggleIcon = $(this).children(".toggle-icon");
      accordion.toggleClass("open");
      accordionContent.slideToggle(250);
      if (accordion.hasClass("open")) {
        accordionToggleIcon.html("<i class='fa fa-minus-circle'></i>");
      } else {
        accordionToggleIcon.html("<i class='fa fa-plus-circle'></i>");
      }
    });

    /** Owl Carousel Js**/
    $(".discover-slide").owlCarousel({
      items: 1,
      nav: true,
      dots: false,
      autoplay: false,
      loop: true,
      navText: [
        "<i class='fa fa-long-arrow-left'></i>",
        "<i class='fa fa-long-arrow-right'></i>",
      ],
      mouseDrag: false,
      touchDrag: false,
    });

    /** MagnificPopup **/
    $(".single-project-item a.project-priview").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
    });

    $(".video-bg a").magnificPopup({
      type: "iframe",
      gallery: {
        enabled: true,
      },
    });

    /** MixItUp JS**/
    $("#project-wrapper").mixItUp();

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
