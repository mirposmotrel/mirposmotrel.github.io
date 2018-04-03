$('document').ready(function(){
    $('.live-slider').slick({
       infinite: true,
       slidesToShow: 1,
       arrows: true,
       nextArrow: $('.live-slider-arrow-next'),
       prevArrow: $('.live-slider-arrow-prev')
   });

   $('.to-tour').on('click', function(){
        $('#modal').addClass('open');
    });

    $('#modal').on('click', function(e){
        if (e.target.id == "modal"){
            $('#modal').removeClass('open');
        }
    });

    $('.live-slider-pagination').on('click', function(){
        $('.live-slider').slick('slickGoTo', $(this).attr('data-slide'));
        $('.live-slider-pagination').removeClass('active');
        $('.live-slider-pagination[data-slide="' + $(this).attr('data-slide') + '"]');
        $(this).addClass('active');
    });

    $('.live-slider-arrow-next').on('click', function(){
        var active;
        $('.live-slider-pagination').each(function(){
            if ($(this).hasClass('active')){
                active = $(this).attr('data-slide');
                return false;
            }});
            active++;
            if (active == 5){
                active = 0;
            }
            $('.live-slider-pagination').removeClass('active');
            $('.live-slider-pagination[data-slide="'+ active +'"]').addClass('active');
        });

     $('.live-slider-arrow-prev').on('click', function(){
        var active;
        $('.live-slider-pagination').each(function(){
            if ($(this).hasClass('active')){
                active = $(this).attr('data-slide');
                return false;
            }});
            active--;
            if (active == -1){
                active = 4;
            }
            $('.live-slider-pagination').removeClass('active');
            $('.live-slider-pagination[data-slide="'+ active +'"]').addClass('active');
        });

     $('.wys-container').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 9999,
            settings: "unslick"
        },
        {
            breakpoint: 450,
             settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: true,
                    prevArrow: $('.wys-arrow-prev'),
                    nextArrow: $('.wys-arrow-next')
                }
        }
    ]
        });

     $(window).on('resize orientationchange', function() {
  $('.wys-container').slick('resize');
});
});




