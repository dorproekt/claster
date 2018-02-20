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
});