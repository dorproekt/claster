$(document).ready(function(){
    
    $('.slider-product').slick({
        slidesToShow: 1,
        autoplaySpeed: 5000,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        prevArrow: '<img class="control prev" src="img/prev-slide.png" alt=""/>',
        nextArrow: '<img class="control next" src="img/next-slide.png" alt=""/>',
        asNavFor: '.slider-nav-product',
        autoplay: false
    });
    $('.slider-nav-product').slick({
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-product',
        dots: false,
        focusOnSelect: true
    });
    
    lightbox.option();
    
    $('.city a').click(function(){
        console.log($(this).attr('href').slice(1));
        var activeClass = '.' + $(this).attr('href').slice(1);
        
        $(activeClass).css('display', 'block');
    });

/* pursuing-goods */
    /*if($('div').is('.pursuing-goods')){
        $('.table-block').after('<div class="test"></div>');
    
        var h1 = $('.table-block table').offset().top;
        var h2 = $('.test').offset().top;
        var h3 = $('.pursuing-goods').height();
        var h4 = h2 - h3;
        // console.log(h1, h2, h3, h4); // 1586 2765 473.281 2291.719
        $('.test').remove();

        $(window).scroll(function() {
            var line = $(window).scrollTop();
            //console.log(line);

            if(line > h1){
                $('.pursuing-goods').addClass('fix');
                console.log(1111);
            }

            if(line > h4){
                $('.pursuing-goods').removeClass('fix');
                $('.pursuing-goods').addClass('abs-bottom');
                console.log(2222);
            }

            if(line <= h4 && line > h1){
                $('.pursuing-goods').removeClass('abs-bottom');
                $('.pursuing-goods').addClass('fix');
                console.log(33333);
            }

            if(line < h1){
                $('.pursuing-goods').removeClass('fix');
                console.log(4444);
            }
        });   
    }*/
    
    if($('div').is('.pursuing-goods')){
        $('.table-block').after('<div class="test"></div>');
        var navH = $('nav').height();
    
        var h1 = $('.table-block table').offset().top - 2*navH;
        var h2 = $('.test').offset().top;
        var h3 = $('.pursuing-goods').height();
        var h4 = h2 - h3 - 2*navH;

        $('.test').remove();

        $(window).scroll(function() {
            var line = $(window).scrollTop();
            
            if(line > h1){
                $('.pursuing-goods').addClass('fix');
            }

            if(line > h4){
                $('.pursuing-goods').removeClass('fix');
                $('.pursuing-goods').addClass('abs-bottom');
            }

            if(line <= h4 && line > h1){
                $('.pursuing-goods').removeClass('abs-bottom');
                $('.pursuing-goods').addClass('fix');
            }

            if(line < h1){
                $('.pursuing-goods').removeClass('fix');
            }
        });   
    }
/* pursuing-goods */
      
/* tab/accordion */
    var widthScreen = screen.width;
    
    if(widthScreen >= 1200){
        $( "#content" ).tabs();
    }else{
        $( "#content ul" ).remove();
        $( "#content h4" ).css('display', 'block');
        $( "#content" ).accordion({
            collapsible: true,
            heightStyle: "content"
        });
    }
    
    $('.arrow').click(function(){
        console.log($(this).parent('.info').siblings('.title').attr('class'));
        $(this).parents('.body').siblings('.title').slideToggle(400);
    });
/* tab/accordion */
    
});