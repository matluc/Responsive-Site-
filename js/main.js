$(document).ready(function() {

  // Hamburger menu toggle
  $('.nav-toggle').click(function() {
    $('.main-nav').toggleClass('is-open');
    $('.hamburger').toggleClass('is-open');
  });


  // Close nav when link is clicked
  $('.main-nav li a').click(function() {
    $(".main-nav").removeClass("is-open");
    $('.hamburger').removeClass('is-open');
    });


  var scrollLink = $('.scroll');
  var headerHeight = $('header').height();
  // SMOOTH SCROLLING
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top - headerHeight
    }, 1000 );
  });

  // ACTIVE LINK SWITCHING
  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function() {

      var sectionOffset = $(this.hash).offset().top - headerHeight - 2;

      if ( sectionOffset <= scrollbarLocation ) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }

    });

  });


  // TO TOP
  // https://paulund.co.uk/how-to-create-an-animated-scroll-to-top-with-jquery
  //Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});

	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});

});
