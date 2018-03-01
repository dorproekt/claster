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
        /*centerMode: true,*/
        focusOnSelect: true
    });
    
    lightbox.option();
    
    let top = $('.pursuing-goods .wrap').offset().top;
    let h = $('.pursuing-goods').height();
    let h2 = $('.table-block').height();
    //console.log(h, h2);
    
    $(window).scroll(function(e){
        let t = $(window).scrollTop();
        
        if(t >= top && t <= top + h){
            $('.pursuing-goods').addClass('fix');
            $('.pursuing-goods').removeClass('abs-bottom'); 
            console.log(1);
        }
        if(t < top){
            $('.pursuing-goods').removeClass('fix');
            console.log(2);
        }
        
        if(t > top + h2 - h){
            $('.pursuing-goods').removeClass('fix');
            $('.pursuing-goods').addClass('abs-bottom');
        }

    });
    
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
});