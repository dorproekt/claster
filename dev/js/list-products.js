$(document).ready(function(){
    
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
    });
    
    //view products-inline or products
    $('.view li').click(function(){
        if(!$(this).hasClass('active')){
            $('.view li').removeClass('active');
            var view = $(this).attr('class');
            $(this).addClass('active');
            /*console.log(view);*/
            
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
    $('.filter-active').click(function(e){
        //console.log('stop');
        
        if($('.filter-active').length === 1){
            $('.reset').remove();
        }

        $(this).remove();
    });
    
    //reset filter-active
    $('.reset').click(function(){
        $('.list-active-filters li').remove();
    });
    
    //select
    $('.select').click(function(){
        $('.options').toggle(50);
    });
    
    $('.option').click(function(){
        var option = $(this).html();
        $('.select span').html(option);
        //console.log($(this).html());
    });
    
    //show/hide filter-params
    $('.title-params i').click(function(){
        //$(this).css('transform', 'rotate(180deg)');
        var i = $(this);
        $(this).parents('.title-params').siblings('.value-params').toggle(500, function(){
            i.css('transform', 'rotate(180deg)');
        });
    });
    
    //checkbox
    /*$('.checkbox i').click(function(){
        if(!$(this).hasClass('active')){
            $(this).addClass('active');
        }else{
            $(this).removeClass('active');
        }
    });*/
    
    $('.checkbox i').click(function(){
        var filterParam = $(this).siblings('span').html();
        var idFilterParam = filterParam.split(' ').join('_');
        
        if(!$(this).hasClass('active')){
            $(this).addClass('active');
            $('.list-active-filters').prepend('<li class="filter-active test" id="' + idFilterParam + '"><span>' + filterParam + '</span><i class="far fa-times-circle"></i></li>');
        }else{
            $(this).removeClass('active');
            $('#' + idFilterParam).remove();
        }
    });
    
    $('#32_Гб').click(function(){
        console.log(2222);
    });

});