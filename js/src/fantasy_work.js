(function(){

  
  var uiMenu = $('.ui-menu-content');

   uiMenu.on('click',function(){
    $('.menu').toggleClass('on');
    $('.ui-menu-line').toggleClass('o');
    $('.ui-menu-line1').toggleClass('x1');
    $('.ui-menu-line2').toggleClass('x2');
    $('.ui-menu-line3').toggleClass('x3');
   });

  
   
   var j=0;

   setInterval(function(){
      if(j>=4){j=0}else{j++}
      $('.titleBox').find('dl').animate({left:j* -100 +'%'
      })
   },3000);  

   $('.iconBox').find('dl').on('mouseenter',function(e){
      e.preventDefault();
      var i = $(this).index();
      $('.iconBox').find('dd').eq(i).css({'fontWeight':'bold'})
   })

   $('.iconBox').find('dl').on('mouseleave',function(e){
      e.preventDefault();
      var i = $(this).index();
      $('.iconBox').find('dd').eq(i).css({'fontWeight':'normal'})
   })

   //스크롤내렸을때, iconBox의 offset이 0일때, iconBox의 dl사이즈 변경
   //1.iconBox의 offset위치 파악
   //2.현재 scrolltop위치 파악
   //3.offset이 scrolltop 의 1/2에 왔을때일때,
   //4. iconBox>dl사이즈를 변경하자


   
   var iconBoxOff = $('.iconBox').offset().top;
   var winH = $(window).outerHeight(true);
   var myH = winH/2;
   //console.log(iconBoxOff-myH);

   $(window).on('scroll',function(){
    var nowTop = $(window).scrollTop();
    if(nowTop>=iconBoxOff){
      $('.iconBox').find('dl').css({width:20+'%'});
      $('.iconBox').css({'position':'fixed'});
      $('.iconBox').css({'top':'0'});
      $('.iconBox').find('dl').css({'top':'0'});
    } else{
      $('.iconBox').find('dl').css({width:25+'%'})
    }
   })

  /*$(window).on('scroll',function(){
    var nowTop = $(window).scrollTop();
    if(('.iconBox').attr('top') = 0){
      $('.iconBox').animate({width:80+'%'})
    } else{
      $('.iconBox').animate({width:100+'%'})
    }
   })*/







})(jQuery);