// RESPONSIVE NAV
$(function() {
	menu = $('nav ul');

  $('#openup').on('click', function(e) {
    e.preventDefault(); menu.slideToggle();
  });
  
  $(window).resize(function(){
    var w = $(this).width(); if(w > 480 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });
  
  $('nav li').on('click', function(e) {                
    var w = $(window).width(); if(w < 480 ) {
      menu.slideToggle(); 
    }
  });
  $('.open-menu').height($(window).height());
});

// // SMOOTH SCROLLING
// $('a[href*="#"]').on('click', function(e) {
//   e.preventDefault()

//   $('html, body').animate(
//     {
//       scrollTop: $($(this).attr('href')).offset().top,
//     },
//     1000,
//     'linear'
//   )
// })