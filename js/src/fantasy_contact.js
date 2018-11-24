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

//clock-second

function Clock_move(s,m,h){
var sec = $('.sec');
var sec_deg = s*6; 
var min = $('.min');
var min_deg =m*6;
var hour = $('.hour');
var hour_deg =h*360/12;
sec.css({'transform':'rotate('+ sec_deg +'deg)'});
min.css({'transform':'rotate('+ min_deg +'deg)'});
hour.css({'transform':'rotate('+ hour_deg +'deg)'});
setInterval(function(){
  sec_deg += 360/60; 
  sec.css({'transform':'rotate('+ sec_deg +'deg)'});
  console.log(sec_deg);
  if(sec_deg == 360){
    sec_deg = 0;
    min_deg += 360/60;
    console.log(min_deg);
    min.css({'transform':'rotate('+ min_deg +'deg)'});
    if(min_deg ==360){
    min_deg =0;
    hour_deg += 360/12;
    console.log(hour_deg);
    hour.css({'transform':'rotate('+ hour_deg +'deg)'});
    }
  }
 },1000);
}

var sanDate = new Date();
var sanS = sanDate.getSeconds();
var sanM = sanDate.getMinutes();
var sanH = sanDate.getHours();
Clock_move(sanS,sanM,sanH);
/*
var sec = $('.sec');
var sec_deg = 0; 
var min = $('.min');
var min_deg =0;
var hour = $('.hour');
var hour_deg =0;

var clock =setInterval(function(){
  sec_deg += 360/60; 
  sec.css({'transform':'rotate('+ sec_deg +'deg)'});
  console.log(sec_deg);
  if(sec_deg == 360){
    sec_deg = 0;
    min_deg += 360/60;
    console.log(min_deg);
    min.css({'transform':'rotate('+ min_deg +'deg)'});
    if(min_deg ==360){
    min_deg =0;
    hour_deg += 360/12;
    console.log(hour_deg);
    hour.css({'transform':'rotate('+ hour_deg +'deg)'});
    }
  }
 },1000);
  */


/*
var counter = 0;
var i = setInterval(function(){
    $('.sec').css({'transform':'rotate(1deg)'})
    counter++;
    if(counter === 360) {
        clearInterval(i);
    }
}, 200);
*/




//clock

/*$.fn.clock = function() {
  var $page = $(this);
  
  console.log('clock');

  $page.find('[data-clock]').each(function() {

    var $clock = $(this)
      , time = $clock.data('clock')
      , diff = new Date(time) - Date.now()
      , $sArrow = $clock.find('[data-clock-arrow="s"]')
      , $mArrow = $clock.find('[data-clock-arrow="m"]')
      , $hArrow = $clock.find('[data-clock-arrow="h"]')
      , setRotate = function($block, degree) {
          $block.css({
            '-webkit-transform': 'rotate(' + degree + 'deg)',
            '-moz-transform': 'rotate(' + degree + 'deg)',
            '-ms-transform': 'rotate(' + degree + 'deg)',
            '-o-transform': 'rotate(' + degree + 'deg)',
            'transform': 'rotate(' + degree + 'deg)'
          });
        }
      , rotate = function($block, d, value) {
          if (d==24) {
            if (value>=12) value = value-12;
            d = 12;
          }
          var angle = ((value / d) * 360) - 90;
          if (value === (d - 1)) {
            setRotate($block, angle);
            setTimeout(function() {
              $block.addClass('i-no-transition');
              setTimeout(function() {
                setRotate($block, angle - 360);
              }, 20);
            }, 120);
          } else if ($block.hasClass('i-no-transition')) {
            $block.removeClass('i-no-transition');
            setTimeout(function() {
              setRotate($block, angle);
            }, 20);
          } else {
            setRotate($block, angle);
          }
        }
      , tick = function() {
          var now = new Date(Date.now() + diff);
          rotate($sArrow, 60, now.getSeconds());
          rotate($mArrow, 60, now.getMinutes());
          rotate($hArrow, 24, now.getHours() + now.getMinutes()/60);
        }
      ;
    tick();
    setInterval(tick, 1000);
  });
}; */

/*function clock(){
    //calculate angle
    var d, h, m, s;
    d = new Date;
    
    h = 30 * ((d.getHours() % 12) + d.getMinutes() / 60);
    m = 6 * d.getMinutes();
    s = 6 * d.getSeconds();
    
    //move hands
    setAttr('san_c_hour', h);
    setAttr('san_c_hour', m);
    setAttr('san_c_min', s);
    setAttr('san_c_sec', s+180);
    
    //display time
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    
    if(h >= 12){
        setText('suffix', 'PM');
    }else{
        setText('suffix', 'AM');
    }
    
    if(h != 12){
        h %= 12;
    }
    
    setText('sec', s);
    setText('min', m);
    setText('hr', h);
    
    //call every second
    setTimeout(clock, 1000);
    
};

function setAttr(id,val){
    var v = 'rotate(' + val + ', 70, 70)';
    document.getElementById(id).setAttribute('transform', v);
};

function setText(id,val){
    if(val < 10){
        val = '0' + val;
    }
    document.getElementById(id).innerHTML = val;
};

window.onload=clock; */

})(jQuery);