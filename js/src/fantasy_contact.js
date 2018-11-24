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




//SanFrancisco Clock


var sanDate = new Date();
sanDate.setHours(10);


var sanS = sanDate.getSeconds();
var sanM = sanDate.getMinutes();
var sanH = sanDate.getHours();

function Clock_move(sanS,sanM,sanH){
var sec = $('.san_c_sec');
var sec_deg = sanS*6; 
var min = $('.san_c_min');
var min_deg =sanM*6;
var hour = $('.san_c_hour');
var hour_deg =sanH*360/12;

sec.css({'transform':'rotate('+ sec_deg +'deg)'});
min.css({'transform':'rotate('+ min_deg +'deg)'});
hour.css({'transform':'rotate('+ hour_deg +'deg)'});

setInterval(function(){
  sec_deg += 360/60; 
  sec.css({'transform':'rotate('+ sec_deg +'deg)'});
  //console.log(sec_deg);
  if(sec_deg == 360){
    sec_deg = 0;
    min_deg += 360/60;
    //console.log(min_deg);
    min.css({'transform':'rotate('+ min_deg +'deg)'});
    if(min_deg ==360){
    min_deg =0;
    hour_deg += 360/12;
    //console.log(hour_deg);
    hour.css({'transform':'rotate('+ hour_deg +'deg)'});
    }
  }
 },1000);
}

Clock_move(sanS,sanM,sanH);

})(jQuery);




//NewYork Clock


(function(){

var newDate = new Date();
newDate.setHours(11);

var newS = newDate.getSeconds();
var newM = newDate.getMinutes();
var newH = newDate.getHours();

function Clock_move(NewS,NewM,NewH){
var sec = $('.new_c_sec');
var sec_deg = newS*6; 
var min = $('.new_c_min');
var min_deg =newM*6;
var hour = $('.new_c_hour');
var hour_deg =newH*360/12;

sec.css({'transform':'rotate('+ sec_deg +'deg)'});
min.css({'transform':'rotate('+ min_deg +'deg)'});
hour.css({'transform':'rotate('+ hour_deg +'deg)'});

setInterval(function(){
  sec_deg += 360/60; 
  sec.css({'transform':'rotate('+ sec_deg +'deg)'});
  //console.log(sec_deg);
  if(sec_deg == 360){
    sec_deg = 0;
    min_deg += 360/60;
    //console.log(min_deg);
    min.css({'transform':'rotate('+ min_deg +'deg)'});
    if(min_deg ==360){
    min_deg =0;
    hour_deg += 360/12;
    //console.log(hour_deg);
    hour.css({'transform':'rotate('+ hour_deg +'deg)'});
    }
  }
 },1000);
}

Clock_move(newS,newM,newH);

})(jQuery);