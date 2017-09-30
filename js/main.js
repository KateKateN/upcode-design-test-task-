$(document).ready(function(){
// SLIDER 
	$('.slider-banner').slick({
	  	dots: true,
	  	arrows: true,
	  	dotsClass: "slick-dots",
	  	nextArrow: '<div class="arrow-bg-rt"><i class="fa fa-angle-right rt-arrow" aria-hidden="true"></i></div>',
        prevArrow: '<div class="arrow-bg-ltf"><i class="fa fa-angle-left lft-arrow" aria-hidden="true"></i></div>',
	  	autoplay: true,
	  	autoplaySpeed: 3000,
	  	infinite: true,
	  	speed: 500,
	  	fade: true,
	  	cssEase: 'linear'
	});

//MENU ACTIVE STATE
	var menuItems = $(".menu-item"); 
	menuItems.click(function(event){
		menuItems.removeClass("active");
		$(event.currentTarget).toggleClass("active");
	});

	$(window).scroll(function(event) {
		var scrollDistance = $(window).scrollTop();
		var maxI = 0;
		// Assign active class to nav links while scolling
		var pageSections = $('.page-section');
		pageSections.each(function(i) {
			var sectionPosition = $(this).position().top;
				if (sectionPosition <= scrollDistance) {
					maxI = i;				
				}
		});
		var currentDiv = pageSections[maxI];
		currentDivId = $(currentDiv).attr("id");
		$(".menu-item").removeClass("active");
		var menuItem = $(".menu-link[href='#" + currentDivId+ "']").parent().addClass("active");				
		
	});

// //MENU (SMOOTH SCROLLING)
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;     
        $('body,html').animate({scrollTop: top}, 1500);
    });
      $("#menu_phone").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
// UP BUTTON 
function up() {  
  var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);  
     if(top > 0) {  
       window.scrollBy(0,((top+100)/-10));  
       t = setTimeout('up()',20);  
       } else clearTimeout(t);  
       return false;  
     }
    $(window).scroll(function() {
      if($(this).scrollTop() != 0) {
          $('#toTop').fadeIn();
      } else {
        $('#toTop').fadeOut();
        }
    });
  $('#toTop').click(function() {
    $('body,html').animate({scrollTop:0},800);
  });

// add phone menu (change hamburger to cross)
	$(".hamburger").click(function(){
		$(".menu-items-phone").toggle();
		$(".hamburger").toggle();
		$(".cross").toggle();
	});
	$(".cross").click(function(){
		$(".menu-items-phone").toggle();
		$(".hamburger").toggle();
		$(".cross").toggle();
	});
	$(".products-menu").click(function(e){
		// e.stopPropagation();
		$(".main-dropdown-menu-phone").toggle();
	});
	$(".next-dropdown").click(function(e){
		e.stopPropagation();
		$(".dropdown-menu-phone").toggle();
	});
});