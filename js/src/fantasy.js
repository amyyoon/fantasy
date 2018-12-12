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


// 브라우저 화면 scroll down
   $(window).animate({scrollTop:0},300);
   $('html,body').animate({scrollTop:0},300);
   var box = $('.box');
   var boxList = [];
   var boxLen = box.length;
   var j=0;

   $.each(box, function(index,value){
     boxList[index] = $(this).offset().top;
   });
     console.log(boxList);

     var go = true;
     $('html').on('mousewheel DOMMouseScroll', function(e){
       var originE=e.originalEvent;
       var foxevt= originE.detial;
       var evt = originE.wheelDelta;
       var delta;

 // firefox이벤트 확인
       if(foxevt){
         console.log('firefox detail', foxevt);
         foxevt *= -40;
       }else if(evt){
         console.log('wheelDelta', evt);
         delta = evt;
       }
       console.log(delta);

       var delta = evt;
       if(delta <0 && go){
         go=false;
         (j>= boxLen-1) ? j = boxLen-1 : j+=1;
       }else if(delta>0 && go){
         go=false;
         (j<=0) ? j=0: j-=1;
       }
       $('html').stop().animate({scrollTop:boxList[j]},
         function(){
           go=true;
         });
     });

})(jQuery);