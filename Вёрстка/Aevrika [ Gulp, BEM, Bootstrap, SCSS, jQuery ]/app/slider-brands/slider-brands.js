$('.slider-brands__slider-names').slick({
    infinite:true,
    slidesToShow: 6,
    slidesToScroll: 0.05,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 200,
    cssEase: 'linear',
    pauseOnFocus:false,
    pauseOnHover:true,
    responsive: [
        {
            breakpoint: 1380,
            settings: {
                slidesToShow: 5,
                //slidesToScroll: 0.05
            }
        },
        {
            breakpoint: 1180,
            settings: {
                slidesToShow: 4,
                //slidesToScroll: 0.05
            }

        },
        {
            breakpoint: 1020,
            settings: {
                slidesToShow: 3,
                //slidesToScroll: 0.05
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 0.08
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 0.09
            }
        },
    ]
});

$('.slider-brands__slider-list').slick({
    infinite:true,
    slidesToShow: 5,
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
            breakpoint: 1180,
            settings: {
                slidesToShow: 4,
            }

        },
        {
            breakpoint: 1020,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 840,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 0.08
            }
        },
        {
            breakpoint: 680,
            settings: {
                slidesToShow: 1,
            }
        },
    ]

});

function sliderListPrev() {

    $('.slider-brands__slider-list').slick('slickPrev');
    $('.slider-brands__slider-list').slick('slickPause')

}

function sliderListNext() {

    $('.slider-brands__slider-list').slick('slickNext');
    $('.slider-brands__slider-list').slick('slickPause')
}
