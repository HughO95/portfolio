//jquery for hamburger menu 
$(document).ready(function () {
    $('.hamburger').on('click', function (e) {
        // this prevents the link from jumping to the top of the page
        e.preventDefault();
        // This toggles the slide-down class. If the menu class is showing, slide it up. Otherwise, slide it down.
        $('.menu').toggleClass('slide-down');
    });
});


// add lightbox with more of an image gallery

// add option for the user to jump down to the information on longer pages.
//Smooth page scrolling https://codepen.io/chriscoyier/pen/dpBMVP

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
              // Only prevent default if animation is actually gonna happen
              event.preventDefault();
              $('html, body').animate({
                  scrollTop: target.offset().top
              }, 1000, function () {
                  // Callback after animation
                  // Must change focus!
                  var $target = $(target);
                  $target.focus();
                  if ($target.is(":focus")) { // Checking if the target was focused
                      return false;
                  } else {
                      $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                      $target.focus(); // Set focus again
                  };
              });
          }
      }
  });


