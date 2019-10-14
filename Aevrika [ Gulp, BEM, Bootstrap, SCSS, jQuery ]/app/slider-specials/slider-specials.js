$('.slider-specials__slider').slick({
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

function sliderSpecialsPrev() {
    $('.slider-specials__slider').slick('slickPrev');
    $('.slider-specials__slider').slick('slickPause');
}

function sliderSpecialsNext() {
    $('.slider-specials__slider').slick('slickNext');
    $('.slider-specials__slider').slick('slickPause');
}
