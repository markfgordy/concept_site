jQuery(document).ready(function($){

//OPEN RESPONSIVE NAV BAR  
  //open-close submenu on mobile
  $('.header-navbar').on('click', function(event){
    if($(event.target).is('.header-navbar')) $(this).children('ul').toggleClass('navbar-is-visible');
  });

  $(function() {
    $('.footer-test').click(function() {
      $('.footer-section').toggleClass('active').css('top', 0);
    });
  });



//SCROLL TO TOP OF PAGE
  // browser window scroll (in pixels) after which the "back to top" link is shown
  var offset = 300,
    //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    offset_opacity = 1200,
    //duration of the top scrolling animation (in ms)
    scroll_top_duration = 1000,
    //grab the "back to top" link
    $back_to_top = $('.scroll-top');

  //hide or show the "back to top" link
  $(window).scroll(function(){
    ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('scroll-is-visible') : $back_to_top.removeClass('scroll-is-visible scroll-fade-out');
    if( $(this).scrollTop() > offset_opacity ) { 
      $back_to_top.addClass('scroll-fade-out');
    }
  });

  //smooth scroll to top
  $back_to_top.on('click', function(event){
    event.preventDefault();
    $('body,html').animate({
      scrollTop: 0 ,
      }, scroll_top_duration
    );
  });

//HIDE NAVBAR ON SCOLL DOWN, SHOW NAVBAR ON SCROLL UP
  // Hide Header on on scroll down
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('.header').outerHeight();

  $(window).scroll(function(event){
      didScroll = true;
  });

  setInterval(function() {
      if (didScroll) {
          hasScrolled();
          didScroll = false;
      }
  }, 250);

  function hasScrolled() {
      var st = $(this).scrollTop();
      
      // Make sure they scroll more than delta
      if(Math.abs(lastScrollTop - st) <= delta)
          return;
      
      // If they scrolled down and are past the navbar, add class .nav-up.
      // This is necessary so you never see what is "behind" the navbar.
      if (st > lastScrollTop && st > navbarHeight){
          // Scroll Down
          $('.header').removeClass('navbar-down').addClass('navbar-up');
      } else {
          // Scroll Up
          if(st + $(window).height() < $(document).height()) {
              $('.header').removeClass('navbar-up').addClass('navbar-down');
              $('.header-navbar').children('ul').removeClass('navbar-is-visible');
          }
      }

      lastScrollTop = st;
  }

      // If they scrolled down and are past the navbar, add class .nav-up.
      // This is necessary so you never see what is "behind" the navbar.
//      if (st > lastScrollTop && st > navbarHeight){
//          // Scroll Down
//          $('.header').removeClass('navbar-down').addClass('navbar-up');
//      } else {
//          // Scroll Up
//          if(st + $(window).height() < $(document).height()) {
//              $('.header').removeClass('navbar-up').addClass('navbar-down');
//          }
//      }


//SCROLL TO SPECIFIC SECTIONS OF PAGE
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1500);
          return false;
        }
      }
    });
  });
  
//TIMELINE
(function() {

  'use strict';

  // define variables
  var items = document.querySelectorAll(".timeline .content-box");

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);

})();





}); //END