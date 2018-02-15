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
    
    //slider clients
    $('#clients').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 2000,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            
        ]
    });
});   
    /*
    
                {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            });
    
    */