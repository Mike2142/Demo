$('.slider-hits__slider').slick({
    infinite:true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay:false,
    autoplaySpeed: 6000,
    speed: 350,
    pauseOnFocus:true,
    pauseOnHover:true,

    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1020,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }

        },
        {
            breakpoint: 838,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
    ]
});

function slickPrev2() {
    $('.slider-hits__slider').slick('slickPrev');
    $('.slider-hits__slider').slick('slickPause');

    $('.slider-brands__slider-list').slick('slickPrev');
    $('.slider-brands__slider-list').slick('slickPause')

}

function slickNext2() {
    $('.slider-hits__slider').slick('slickNext');
    $('.slider-hits__slider').slick('slickPause');

    $('.slider-brands__slider-list').slick('slickNext');
    $('.slider-brands__slider-list').slick('slickPause')
}
