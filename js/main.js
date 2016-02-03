;(function () {
	
	'use strict';

	// iPad and iPod detection	
	var isiPad = function(){
	  return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
	      (navigator.platform.indexOf("iPhone") != -1) || 
	      (navigator.platform.indexOf("iPod") != -1)
	    );
	};

	
	// Fast Click for ( Mobiles/Tablets )
	var mobileFastClick = function() {
		if ( isiPad() && isiPhone()) {
			FastClick.attach(document.body);
		}
	};

	var menuAnimate = function(o, margin, duration, mul) {
		var navLi = $('#dap-nav > ul > li'), 
			ktemp = 0;
		navLi.each( function(k){
			var el = $(this);
			setTimeout(function() {
				el.velocity(
					{ opacity: o, marginRight: margin }, 
					{ duration: duration }
				);
			},  k * mul );
			ktemp = k;
		});
		
		console.log(ktemp);
		setTimeout(function(){
			$('.js-dap-nav-call-to-action').velocity(
				{ opacity: o, marginRight: margin }, 
				{ duration: duration }
			);
		}, ktemp+1 * mul );
		
		
	};

	var burgerMenu = function() {
		$('body').on('click', '.js-dap-nav-toggle', function(){
			$('#dap-nav > ul > li, .js-dap-nav-call-to-action').css({ marginRight: -50, opacity: 0 });
			$(this).toggleClass('active');
			
			var mainNav = $('#dap-main-nav');
			mainNav.slideToggle(400).toggleClass('active');
			

			if ( mainNav.hasClass('active') ) {
				menuAnimate(1, 0, 400, 200);	
			} else {
				menuAnimate(0, -50, 1, 0);	
			}

		});
	};

	var mobileMenuState = function() {
		if ( $(window).width() > 768 ) {
			$('#dap-main-nav').removeClass('active').show();
			$('#dap-nav > ul > li, .js-dap-nav-call-to-action').attr('style', '');
		} else {
			$('.js-dap-nav-toggle').removeClass('active');
			$('#dap-main-nav').hide();
		}
	};

	var imgHover = function(){
		$('.js-dap-work-item').mouseenter(function(){
			if ( $(window).width() > 768 ) {
				$(this).find('.js-dap-overlay-bg, .js-dap-overlay-text').stop().animate({
					opacity: 1
				});
			}
		}).mouseleave(function(){
			if ( $(window).width() > 768 ) {
				$(this).find('.js-dap-overlay-bg, .js-dap-overlay-text').stop().animate({
					opacity: 0
				});
			}
		});
	};

	var viewWorks = function() {
		$('.js-dap-view').click(function(evt){
			
			var $this = $(this);
			$this.toggleClass('active');
			setTimeout(function(){
				$('.js-dap-more-works').slideToggle(400);
				if ( $this.hasClass('active') ) {
					$this.find('.js-dap-view-text').text('Weniger anzeigen');
				} else {
					$this.find('.js-dap-view-text').text('Alle anzeigen');
				}
			}, 500);

			evt.preventDefault();

		})
	};

	



	// Easy Repsonsive Tabs
	var responsiveTabs = function(){
		$('#dap-tab-feature').easyResponsiveTabs({
	      type: 'default',
	      width: 'auto', 
	      fit: true, 
	      inactive_bg: '',
	      active_border_color: '',
	      active_content_border_color: '',
	      closed: 'accordion',
	      tabidentify: 'hor_1'
	            
	    });
	    $('#dap-tab-feature-center').easyResponsiveTabs({
	      type: 'default',
	      width: 'auto',
	      fit: true, 
	      inactive_bg: '',
	      active_border_color: '',
	      active_content_border_color: '',
	      closed: 'accordion', 
	      tabidentify: 'hor_1' 
	      
	    });
	    $('#dap-tab-feature-vertical').easyResponsiveTabs({
	      type: 'vertical',
	      width: 'auto',
	      fit: true,
	      inactive_bg: '',
	      active_border_color: '',
	      active_content_border_color: '',
	      closed: 'accordion',
	      tabidentify: 'hor_1'
	    });
	};

	// Owl Carousel
	var owlCrouselFeatureSlide = function() {
		var owl = $('.owl-carousel');
		owl.owlCarousel({
			items: 1,
		    loop: true,
		    margin: 0,
		    responsiveClass: true,
		    nav: true,
		    dots: true,
		    smartSpeed: 500,
		    navText: [
		      "<i class='ti-arrow-left owl-direction'></i>",
		      "<i class='ti-arrow-right owl-direction'></i>"
	     	]
		});
	};

	var testimonialCarousel = function(){
		var owl = $('.owl-carousel-fullwidth');
		owl.owlCarousel({
			items: 1,
		    loop: true,
		    margin: 0,
		    responsiveClass: true,
		    nav: false,
		    dots: true,
		    smartSpeed: 500,
		    autoHeight: true
		});
	};

	// MagnificPopup
	var magnifPopup = function() {
		$('.image-popup').magnificPopup({
			type: 'image',
		  gallery:{
		    enabled:true
		  }
		});
	};

	// Smooth Scroll Top
	var sScrollTop = function () {

		$(window).scroll(function(){
			if ($(window).scrollTop() > 100 ) {
				$('.dap-gotop').show();
			} else {
				$('.dap-gotop').hide();
			}
		});
		$('.dap-gotop').click(function(event){

		    $('html, body').animate({
		        scrollTop: 0
		    }, 500);

		    event.preventDefault();
		    return false;
		});
	};

	var wResize = function() {
		mobileMenuState();
		imgHover();
		$(window).resize(function(){
			mobileMenuState();
			imgHover();
		});

	};
	

	$(function(){
		burgerMenu();
		mobileFastClick();
		responsiveTabs();
		magnifPopup();
		owlCrouselFeatureSlide();
		testimonialCarousel();
		sScrollTop();
		wResize();
		viewWorks();
	});


}());