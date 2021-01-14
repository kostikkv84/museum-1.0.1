// ----- устанвавливаем на спан событие
$(document).ready(function() {
    $('.top__menu_burger').click(function(event){
        $('.top__menu_burger, .top__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});  

// ------ ставим на кнопку меню событие отключающее бургер

$(document).ready(function() {
    $('.scrollto').click(function(event){
        $('.top__menu_burger, .top__menu').removeClass('active');  
    });
}); 




window.addEventListener('load', ibg);

function ibg () {
  var elem = document.getElementsByClassName('ibg');
  for (var i=0; i<elem.length;i++) {
        elem[i].style.background = "url('../img/header.jpg')";
  }

}




/*  Залипание веремени работы*/

jQuery(document).ready(function($){
var $window=$(window),
$target=$(".fixed-div"),
$h=$target.offset().top;
$window.on('scroll',function(){
var scrollTop=window.pageYOffset||document.documentElement.scrollTop;
if(scrollTop>$h){
$target.addClass("sticky");
return;
}else{
$target.removeClass("sticky");
}
return;
});
});

/* END Залипание веремени работы*/

/* ------- Кнопка вверх страницы -------------- */
jQuery(document).ready(function($){

    // hide #back-top first
    $("#back-top").hide();
    
    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });

        // scroll body to 0px on click
        $('#back-top a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });

});
/* ---END--- Кнопка вверх страницы --------------  */

(function($){
  $(function() {
    $('.menu__icon').on('click', function() {
      $(this).closest('.menu')
        .toggleClass('menu_state_open');
    });
    
    $('.menu__links-item').on('click', function() {
      // do something

      $(this).closest('.menu')
        .removeClass('menu_state_open');
    });
  });
})(jQuery);

/* ---- прокручивающийся список ---------- */

var TINY={};

function T$(id){return document.getElementById(id)}
function T$$$(){return document.all?1:0}

TINY.scroller=function(){
    return{
        init:function(a,c,b,s,d){
            a=T$(a); a.c=c; a.s=s; c=T$(c); b=T$(b); s=T$(s); a.n=d||0;
            b.style.display='block'; a.style.overflow='hidden';
            var h=a.offsetHeight, t=c.offsetHeight;
            if(t<h){
                b.style.display='none'
            }else{
                a.m=h-t; a.d=t/h; s.style.height=(h*(h/t))+'px'; s.style.top=b.style.top=0;
                s.onmousedown=function(event){TINY.scroller.st(event,a.id); return false};
                s.onselectstart=function(){return false}
            }
            a.l=b.offsetHeight-s.offsetHeight
        },
        st:function(e,f){
            var a=T$(f), s=T$(a.s); a.bcs=TINY.cursor.top(e); a.bct=parseInt(s.style.top);
            if(a.mv){this.sp(f)}
            a.mv=function(event){TINY.scroller.mv(event,f)};
            a.sp=function(){TINY.scroller.sp(f)};
            if(T$$$()){
                document.attachEvent('onmousemove',a.mv); document.attachEvent('onmouseup',a.sp)
            }else{
                document.addEventListener('mousemove',a.mv,1); document.addEventListener('mouseup',a.sp,1)
            }
            if(a.d){s.className+=' '+a.n}
        },
        mv:function(e,f){
            var a=T$(f), m=TINY.cursor.top(e)-a.bcs+a.bct, s=T$(a.s), c=T$(a.c);
            if(m>=0&&m<a.l){
                s.style.top=m+'px'; c.style.top=(m*-1*a.d)+'px'
            }else if(m<0){
                s.style.top=0; c.style.top=0
            }else if(m>a.l){
                s.style.top=a.l+'px'; c.style.top=a.m+'px'
            }
        },
        sp:function(f){
            var a=T$(f), s=T$(a.s); if(a.d){s.className=s.className.replace(' '+a.n,'')}
            if(T$$$()){
                document.detachEvent('onmousemove',a.mv); document.detachEvent('onmouseup',a.sp)
            }else{
                document.removeEventListener('mousemove',a.mv,1); document.removeEventListener('mouseup',a.sp,1)
            }
            a.mv=0;
        }
    }
}();

TINY.cursor=function(){
    return{
        top:function(e){
          return T$$$()?window.event.clientY+document.documentElement.scrollTop+document.body.scrollTop:e.clientY+window.scrollY
        }
    }
}();

/* -------  добавление класса DISPLAY-NONE ------- */
$(document).ready(function() {
 
  /*$(window).resize(function(){*/
    var windowWidth = $(window).width();
    if(windowWidth <= 767)$(".about-museum").addClass("display_none");

    else $(".about-museum").removeClass("display_none");
  });


$(document).ready(function() {
 
  /*$(window).resize(function(){*/
    var windowWidth = $(window).width();
    if(windowWidth > 768)$(".about-museum-media").addClass("display_none");

    else $(".about-museum-media").removeClass("display_none");
  });


/* ---END----  добавление класса DISPLAY-NONE ------- */

