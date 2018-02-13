$(document).ready(function(){
    
    //menu
    let widthScreen = screen.width;
    
    $('nav li').hover(function(e){
        if(e.clientX > widthScreen/2){// меню в правой части
           $(this).children('.submenu').css({right: 0});
        }else{// меню в левой части
            $(this).children('.submenu').css({left: 0});
        }
        $(this).children('.submenu, .arrow-up').css('display','flex');
    }, function(){
        if($(this).hasClass('item')){
            $('.submenu, .arrow-up').css('display','none');
        }
    });
    
    //slider
    $('#slider').slick({
        dots: true,
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 1000,
        prevArrow: '<img class="control prev" src="img/prev.png" alt=""/>',
        nextArrow: '<img class="control next" src="img/next.png" alt=""/>',
    });

});