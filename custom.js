$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.carousel').carousel({
           numVisible: 7
    });
    $('.carousel.carousel-slider').carousel({
            fullWidth: true
    });
    $('.next').click(function(){
            $('.carousel').carousel('next');
    });
    $('.prev').click(function(){
            $('.carousel').carousel('prev');
    });
});