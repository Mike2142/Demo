$('.block-catalog__nav-item').on('show.bs.dropdown', function () {

    var screen = $(window);

    if (screen.width() > 576) {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown(200);
        $(this).find(".block-catalog__nav-link").addClass("block-catalog__nav-link_font-brown");
        $(this).find(".block-catalog__nav-presents").css( "color", "#c1a067" );
    } else {
        $(this).find(".block-catalog__nav-link").addClass("block-catalog__nav-link_font-brown");
        $(this).find(".block-catalog__nav-presents").css( "color", "#c1a067" );
    }

});

$('.block-catalog__nav-item').on('hide.bs.dropdown', function () {
    var screen = $(window);
    if (screen.width() > 576) {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
        $(this).find(".block-catalog__nav-link").removeClass("block-catalog__nav-link_font-brown");
        $(this).find(".block-catalog__nav-presents").css( "color", "white" );
    } else {
        $(this).find(".block-catalog__nav-link").removeClass("block-catalog__nav-link_font-brown");
        $(this).find(".block-catalog__nav-presents").css( "color", "white" );
    }
});

$.fancybox.defaults.animationEffect = "zoom-in-out";

$.fancybox.defaults.animationDuration = "500";

$('input[type="tel"]').inputmask('9 (999) 999 99 99', { placeholder: " ", showMaskOnHover: false,
    showMaskOnFocus: false });

function fancyThanks() {

    $.fancybox.close();

    $.fancybox.open({
        src  : '#hidden-content2',
        type : 'inline',
        opts : {
            afterShow : function( instance, current ) {
                console.info( 'done!' );
            }
        }
    });
}

function burger() {

    var x = document.getElementById("burger");
    var y = document.getElementById("burgerMenu");

    if (y.style.top === "-200px" || y.style.top === "") {
        y.style.top = "59px";
        x.classList.add("is-active");

    } else {
        y.style.top = "-200px";
        x.classList.remove("is-active");
    }
}

function dropDownCatalog() {
    var x = document.getElementById("dropCatalog");
    var y = document.getElementById("dropCatalogLink");
    var z = document.getElementById("drop-arrow");

    if (x.style.top === "-1100px" || x.style.top === "") {
        x.style.top = "57px";
        y.style.color = "#c1a067";
        z.style.transform = "rotate(0.75turn)";
        z.style.fill = "#c1a067";
    } else {
        x.style.top = "-1100px";
        y.style.color = "white";
        z.style.transform = "rotate(0.25turn)";
        z.style.fill = "white";
    }
};

$('.slider-main__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay:false,
    autoplaySpeed: 6000,
    speed: 800,
    pauseOnFocus:true,
    pauseOnHover:true,
});

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
