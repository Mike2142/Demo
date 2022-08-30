$('.slider-fresh__slider').slick({
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

function sliderFreshPrev() {
    $('.slider-fresh__slider').slick('slickPrev');
    $('.slider-fresh__slider').slick('slickPause');


}

function sliderFreshNext() {
    $('.slider-fresh__slider').slick('slickNext');
    $('.slider-fresh__slider').slick('slickPause');

}
