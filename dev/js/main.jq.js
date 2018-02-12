$(document).ready(function(){
    
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