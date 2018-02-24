	//Lazy Loads
	$('img.lazy').each(function(){
		var src = $(this).data('src');
		$(this).attr('src',src);
	});
