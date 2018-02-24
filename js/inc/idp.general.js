jQuery(window).bind("load", function() {
	'use strict';
jQuery(function($) { 

//Disable checkbox cache on refresh
$('#nav-trigger').removeAttr('checked');
	
//iLightbox Enabled
	if( $("a[href$='.jpg'], a[href$='.png'], a[href$='.jpeg']").length >= 1 ){
			$("a[href$='.jpg'], a[href$='.png'], a[href$='.jpeg']").iLightBox({path: 'horizontal', skin: 'dark', controls: { arrows: true }});
	}

function isTouchDevice() {
	"use strict";
		return 'ontouchstart' in document.documentElement;
}

  //Double Click to open parent menu item in mobile
  if( isTouchDevice() ){
      $('ul.mobile-menu>li>a').click(function(e){
        if( $(this).hasClass('go') || $(this).next('ul.children').length < 1 ){ 
          return;
        }else{	
          e.preventDefault();
          $(this).addClass('go');
        }
      });
  }
	
	//Auto Pad Menu (remove if unneeded)
	function AutoPad(){
		if( $(window).width() > 750 ){
			$('ul.menu>li>a').css({'padding-left':0, 'padding-right':0});
			var $menu = $('ul.menu'),
				liW = 0,
				menuW = $menu.width(),
				totalLi = $('ul.menu>li').length;
			$('ul.menu>li').each(function(){
				liW = liW + $(this).width();
			});
			var pad = Math.floor((menuW-liW)/(totalLi*2));
			$('ul.menu>li>a').css({'padding-left':pad+'px', 'padding-right':pad+'px'});
		}else{
			$('ul.menu>li>a').css({'padding-left':'5%', 'padding-right':'5%'});
		}
	}	
	AutoPad();
	
	
	//Fix footer to bottom if content is shorter than browser height
	function FooterFix(){
		var contentH = $('.container').height() + $('.footer-container').height();
		if( $(window).height() > contentH ){
			$('.footer-container').css({'position':'fixed', 'width':'100%','bottom':'0','left':'0'});	
		}else{
			$('.footer-container').css({'position':'relative', 'width':'100%','bottom':'auto','left':'auto'});	
		}
	}
	FooterFix();
	
	//Call these functions on Resize
	$( window ).resize(function(){  AutoPad(); FooterFix(); });
  
  });
});	
