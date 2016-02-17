// responsive script
function on_resize(c,t){onresize=function(){clearTimeout(t);t=setTimeout(c,100)};return c};
function isResponsive(){
	var e = jQuery.Event();
	var width = jQuery(this).width();
	if(width <= 480){
		e.type = "responsive-480";
		jQuery(document).trigger(e);
	} else if (width <= 768){
		e.type = "responsive-768";
		jQuery(document).trigger(e);
	} else {
		// attach event responsive-no
	}
}

on_resize(function() {
	isResponsive();
})();

jQuery(window).load(function(){
	isResponsive();
});

jQuery(document).bind('responsive-480', function(e){
	// code to exec on 480px responsive
	console.log('responsive in 480px');
});

jQuery(document).bind('responsive-768', function(e){
	// code to exec on 768px responsive
	console.log('responsive in 768px');
});