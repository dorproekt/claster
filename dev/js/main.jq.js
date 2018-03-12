$(document).ready(function(){
    
    /* menu */
    var widthScreen = screen.width;
    
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
    
    $('.show').click(function(){
        $(this).css('display', 'none');
        $(this).siblings('.hide').css('display', 'block');
        $('.menu').css('display', 'block');
    });
    
    $('.hide').click(function(){
        $('.menu').attr('style', '')
        $(this).css('display', 'none');
        $(this).siblings('.show').css('display', 'block');
    });
    /* menu */
    
    //main slider
    $('#slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1500,
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
    
    //zoom img
    $('.category .title').hover(function(e){
        console.log($(this).parent().siblings('img').css({
            'transform': 'scale(1.1)'
        }));
    }, function(e){
        $(this).parent().siblings('img').css({
            'transform': 'scale(1)'
        })
    });
    
    //order
    $('.delivery .radio').click(function(){
        $('.delivery .dot').remove();
        $(this).append('<div class="dot"></div>');
    });
    
    $('.payment .radio').click(function(){
        $('.payment .dot').remove();
        $(this).append('<div class="dot"></div>');
    });
    
    //console.log();
    
    function  totalSum(){
        $('.total p span').html(function(){
            var sum = 0;
            $('.price span').each(function(){
                sum += +$(this).html();
            });
            $('.total p span').html(sum);

        });
    }
    
    $('.remove i').click(function(){
        $(this).parents('tr').remove();
        totalSum();
    });
    
    totalSum(); 
    
    $('.plus').click(function(){
        var cnt = +$(this).parent('.plus-minus').siblings('.num').children('input').val();
        var price = +$(this).parents('.cnt').siblings('.price').children('span').html();
        
        if(cnt === 1){
            $(this).parents('.cnt').siblings('.price').children('span').html(price + price);
        }else{
            $(this).parents('.cnt').siblings('.price').children('span').html(price + price/cnt);
        }

        cnt++;
        $(this).parent('.plus-minus').siblings('.num').children('input').val(cnt);
        totalSum();
        
    });
    
    $('.minus').click(function(){
        var cnt = $(this).parent('.plus-minus').siblings('.num').children('input').val();
        var price = +$(this).parents('.cnt').siblings('.price').children('span').html();
        if(price === 0){
            $(this).parents('.cnt').siblings('.price').children('span').html(0);
        }else{
            $(this).parents('.cnt').siblings('.price').children('span').html(price - price/cnt);
        }
        cnt--;

        if(cnt < 1){
            $(this).parent('.plus-minus').siblings('.num').children('input').val(1); 
            $(this).parents('.cnt').siblings('.price').children('span').html(price);
        }else{
            $(this).parent('.plus-minus').siblings('.num').children('input').val(cnt);
        }
        
        totalSum();
        
    });
    //order
    
    
    
});   
   