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
    
    var topHeader = $('.top-header').height();
    
    //nav top fix
    $(window).scroll(function() {
        var line = $(window).scrollTop();
        
        if(line > topHeader){
            $('nav').addClass('fix');
        }else{
            $('nav').removeClass('fix');
        }
        
    });
    
    //select
    $('.select').click(function(){
        $(this).children('.options').css('display', 'block');
    });
    
    //select-new
    $('.select-new .button').click(function(){
        $(this).siblings('.options').children('.list-sort-params').slideToggle(10);
    });
    
     $('.list-sort-params li').click(function(){
        $(this).parent('.list-sort-params').slideToggle(10);
    });
    //select-new
    
    $('.option').click(function(){
        var option = $(this).html();
        $(this).parent().siblings('span').html(option);
        //console.log($(this).html());
    });//select
    
    /* menu */
    
    // phones
    $('.telephones img').click(function(){
        $(this).siblings('p').addClass('mob');
        $(this).siblings('p').slideToggle(100);
    });
    // phones
    
    // search
    $('.search img').click(function(){
        $(this).siblings('.search-form').slideToggle(200);
    });
    
    $('#searchInp').keyup(function(e){
        //console.log(e);
        $('.search-result').css('display', 'flex');
    });
    // search
    
    //main slider
    $('#slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1500,
        prevArrow: '<img class="control prev" src="img/prev.png" alt=""/>',
        // prevArrow: '<img class="control prev" src="/bitrix/templates/klaster/img/prev.png" alt=""/>',
        nextArrow: '<img class="control next" src="img/next.png" alt=""/>',
        // nextArrow: '<img class="control next" src="/bitrix/templates/klaster/img/next.png" alt=""/>',
    });
    //main slider
    
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
    //slider clients
    
    
    //zoom img
    $('.category .title').hover(function(e){
        $(this).parent().siblings('img').css({
            'transform': 'scale(1.1)'
        })
    }, function(e){
        $(this).parent().siblings('img').css({
            'transform': 'scale(1)'
        })
    });
    //zoom img
    
    //order
    $('.delivery .radio').click(function(){
        $('.delivery .dot').remove();
        $(this).append('<div class="dot"></div>');
    });
    
    $('.payment .radio').click(function(){
        $('.payment .dot').remove();
        $(this).append('<div class="dot"></div>');
    });
    
    function  totalSum(selector){
        $( selector + ' ' + '.total p span').html(function(){
            var sum = 0;
            $(selector + ' ' + '.price span').each(function(){
                sum += +$(this).html();
            });
            $(selector + ' ' + '.total p span').html(sum);

        });
    }
    
    $('.remove i').click(function(){
        $(this).parents('tr').remove();
        totalSum('.order');
        totalSum('.modal');
    });
    
    //close modal
    $('.close, .continue').click(function(){
        $(this).parents('.modal').css('display', 'none');
    });
    
    $('.basket').click(function(){
        $('#basket.modal').css('display', 'flex');
    });
    
    totalSum('.order');
    totalSum('.modal');
    
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
        totalSum('.order');
        totalSum('.modal');
        
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
        
        totalSum('.order');
        totalSum('.modal');
        
    });
    //order
    
    /* list products */
    
    //interesting-goods
    $('.interesting-goods-wrap').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 2000,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '<img class="control left" src="img/black-arrow-left.png" alt="black-arrow-right"/>',
        nextArrow: '<img class="control right" src="img/black-arrow-right.png" alt="black-arrow-left"/>',
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
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            
        ]
        
    });
    
    //view products-inline or products
    $('.view li').click(function(){
        if(!$(this).hasClass('active')){
            $('.view li').removeClass('active');
            var view = $(this).attr('class');
            $(this).addClass('active');
            
            if(view === 'list'){
                $('.products').css('display','none');
                $('.products-inline').css('display','block');
            }else{
                $('.products').css('display','flex');
                $('.products-inline').css('display','none');
            }
        }
    });
    
    //remove filter-active
    $('.list-active-filters').on('click', function(e){
        
        if(e.target.tagName === 'I'){
            
            if($('.filter-active').length === 1){
                $('.reset').css('display', 'none');
            }
            
            var id = $(e.target).parents('.filter-active').attr('id') + '_filter';

            $('#' + id).children('i').removeClass('active');
            $(e.target).parents('.filter-active').remove();

        }
    });
    
    //reset filter-active
    $('.reset').click(function(){
        $('.list-active-filters li.filter-active').remove();
        $('li.reset').css('display', 'none');
        $('.value-params i').removeClass('active');
    });
    
    //show/hide filter-params
    $('.title-params i').click(function(){
        //$(this).css('transform', 'rotate(180deg)');
        var i = $(this);
        
        if(i.hasClass('down')){
            i.css('transform', 'rotate(0deg)');
            i.removeClass('down');
        }else{
            i.addClass('down');
            i.css({
                transform: 'rotate(180deg)',
                transition: 'transform .5s'
            });
        }
        
        $(this).parents('.title-params').siblings('.value-params').slideToggle(500);
    });
    
    //add filter params
    $('.checkbox i').click(function(){
        var filterParam = $(this).siblings('span').html();
        var idFilterParam = filterParam.split(' ').join('_');
        $(this).parents('.checkbox').attr('id', idFilterParam + '_filter');
        
        if(!$(this).hasClass('active')){
            $(this).addClass('active');
            
            if($('.filter-active').length === 0){
                $('.reset').css('display', 'block');
            }
            
            $('.list-active-filters').prepend('<li class="filter-active test" id="' + idFilterParam + '"><span>' + filterParam + '</span><i class="far fa-times-circle"></i></li>');
        }else{
            $(this).removeClass('active');
            $('#' + idFilterParam).remove();
        }
    });
    
    /* slider price */
    
    if($("div").is("#prices")){
        $( "#prices" ).slider({
            range: true,
            min: 0,
            max: 5000,
            values: [ 0, 2500 ],
            slide: function( event, ui ) {
                $( "#min" ).val(ui.values[ 0 ]);
                $( "#max" ).val(ui.values[ 1 ]);
            }
        });

        $( "#min" ).val($( "#prices" ).slider( "values", 0 ));
        $( "#max" ).val($( "#prices" ).slider( "values", 1 ));

        $('#min, #max').keydown(function(e){
            if(e.key === 'Enter'){
                var min = $('#min').val();
                var max = $('#max').val();

                $( "#prices" ).slider("option", "values",  [min, max]);
            }
        });
    }
    
    /* slider price */
    
    $('.selection-parameters').click(function(){
        $('.left-bar').css('display', 'block');
        $('body').append('<div id="bg"></div>');
        $('#bg').css({
            position: 'fixed',
            background: 'rgba(204, 204, 204, 0.7)',
            width: '100%',
            height: '100%',
            top: 0
        });
        $('.filters').show(500);
    });
    
    $('.tuck-up, .close i').click(function(){
        $('.filters').hide(500);
        $('#bg').remove();
    });
    /* list products */
    
    //add to cart
    $('.buy input').click(function(){
        $('#addToCart.modal').css('display', 'flex');
    });
    //add to cart
    
    // request-call
    $('.request-call').click(function(){
        $('#requestСall.modal').css('display', 'flex');
    });
    // request-call
    
    /* product */
    
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
    
    // cities
    $('.city a').click(function(){
        console.log($(this).attr('href').slice(1));
        var activeClass = '.' + $(this).attr('href').slice(1);
        
        $(activeClass).css('display', 'block');
    });
    
    // pursuing-goods
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
    // pursuing-goods
    
    // tab/accordion
    var widthScreen = screen.width;
    
    if(widthScreen >= 1200){
        if($("div").is("#content")){
            $( "#content" ).tabs();
        }
    }else{
        if($("div").is("#content")){
            $( "#content ul" ).remove();
            $( "#content h4" ).css('display', 'block');
            $( "#content" ).accordion({
                collapsible: true,
                heightStyle: "content"
            });
        }
    }
    
    $('.arrow').click(function(){
        console.log($(this).parent('.info').siblings('.title').attr('class'));
        $(this).parents('.body').siblings('.title').slideToggle(400);
    });
    // tab/accordion
    
    /* product */
    
    
    
});   
   