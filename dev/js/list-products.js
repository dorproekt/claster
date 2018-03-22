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
    
    //select
    /*$('.select').click(function(){
        $(this).children('.options').css('display', 'block');
    });*/
    
    //select-new
    $('.select-new .button').click(function(){
        $(this).siblings('.options').children('.list-sort-params').slideToggle(10);
    });
    
    /*$(document).click(function(){
        $('.list-sort-params').css('display', 'none');
    });*/
    
    /*$('.list-sort-params li').click(function(){
        $(this).parent('.list-sort-params').slideToggle(10);
    });//select-new
    
    $('.option').click(function(){
        var option = $(this).html();
        $(this).parent().siblings('span').html(option);
        //console.log($(this).html());
    });*/
    
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
    
    //checkbox
    /*$('.checkbox i').click(function(){
        if(!$(this).hasClass('active')){
            $(this).addClass('active');
        }else{
            $(this).removeClass('active');
        }
    });*/
    
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

});