/*!
    * Start Bootstrap - Agency v6.0.3 (https://startbootstrap.com/theme/agency)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
    */
(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
  
    var navbarCollapse = function () {
        var windowWidth = $(window).width();
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
            // console.log('加入底色啦')
            
            if (windowWidth > 922) {
                // console.log('高度太高 文字變成白色');
                // console.log(windowWidth);
                $("#mainNav").removeClass("navbar-changeShrink");
                $("#mainNav .navbar-brand h3").removeClass("navbar-changeBrand");
                $("#mainNav .navbar-nav .nav-item .nav-link").removeClass("navbar-changColor");
            }
        } else {
            $("#mainNav").removeClass("navbar-shrink");
            // console.log('移除底色啦')
            if (windowWidth > 922) {
                // console.log('高度夠低 文字變成黑色');
                // console.log(windowWidth);
                $("#mainNav").addClass("navbar-changeShrink");
                $("#mainNav .navbar-brand h3").addClass("navbar-changeBrand");
                $("#mainNav .navbar-nav .nav-item .nav-link").addClass("navbar-changColor");
            }
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict




//將標題加上動畫
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11 .line',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


  anime.timeline({loop: true})
    .add({
        targets: '.ml11 .line',
        opacity: 1,
        duration: 1000,
        // easing: "easeOutExpo",
        delay: 5
    })
    .add({
        targets: '.ml11 .line',
        opacity: 0,
        duration: 1000,
        // easing: "easeOutExpo",
        delay: 5
    })








