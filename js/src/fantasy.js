(function(){

	
	var uiMenu = $('.ui-menu-content');

	 uiMenu.on('click',function(){
	 	$('.menu').toggleClass('on');
	 	$('.ui-menu-line').toggleClass('o');
	 	$('.ui-menu-line1').toggleClass('x1');
	 	$('.ui-menu-line2').toggleClass('x2');
	 	$('.ui-menu-line3').toggleClass('x3');
	 });

	
	 $('.msg').on('mouseenter',function(){
	 	$('.title').css({'color':'#fd0202'});
	 	$('.titlebtn').css({'backgroundColor':'#fd0202', 'color':'#fff'})
	 })

	 $('.msg').on('mouseleave',function(){
	 	$('.title').css({'color':'#000'});
	 	$('.titlebtn').css({'backgroundColor':'transparent', 'color':'#fd0202'})
	 })
})(jQuery);