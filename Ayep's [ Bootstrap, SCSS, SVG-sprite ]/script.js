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


function dropDownMenu1() {

    var dropMenu1 = document.getElementById("dropdownMenu1");
    var y = document.getElementById("dropArrow1");
    var z = document.getElementById("dropLi1");

    var q = document.getElementById("dropdownMenu2");
    var w = document.getElementById("dropArrow2");
    var e = document.getElementById("dropLi2");

    if (dropMenu1.style.top === "-700px" || dropMenu1.style.top === "") {
        dropMenu1.style.top = "134px";
        y.style.transform = "rotate(0.75turn)";
        z.style.textDecoration = "underline";

        q.style.top = "-700px";
        w.style.transform = "rotate(0.25turn)";
        e.style.textDecoration = "none";


    } else {
        dropMenu1.style.top = "-700px";
        y.style.transform = "rotate(0.25turn)";
        z.style.textDecoration = "none";
    }
};

function dropDownMenu2() {

    var dropMenu2 = document.getElementById("dropdownMenu2");
    var y = document.getElementById("dropArrow2");
    var z = document.getElementById("dropLi2");

    var q = document.getElementById("dropdownMenu1");
    var w = document.getElementById("dropArrow1");
    var e = document.getElementById("dropLi1");

    if (dropMenu2.style.top === "-700px" || dropMenu2.style.top === "") {
        dropMenu2.style.top = "134px";
        y.style.transform = "rotate(0.75turn)";
        z.style.textDecoration = "underline";

        q.style.top = "-700px";
        w.style.transform = "rotate(0.25turn)";
        e.style.textDecoration = "none";


    } else {
        dropMenu2.style.top = "-700px";
        y.style.transform = "rotate(0.25turn)";
        z.style.textDecoration = "none";
    }
};


$('.sliderSlick').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay:true,
    autoplaySpeed: 6000,
    speed: 350,
    pauseOnFocus:true,
    pauseOnHover:true,

    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 780,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }

        },
        {
            breakpoint: 687,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
    ]
});

function slickPrev() {
    $('.sliderSlick').slick('slickPrev');
    $('.sliderSlick').slick('slickPause')
}

function slickNext() {
    $('.sliderSlick').slick('slickNext');
    $('.sliderSlick').slick('slickPause')
}


$('.sliderSlick2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay:false,
    autoplaySpeed: 6000,
    speed: 350,
    pauseOnFocus:true,
    pauseOnHover:true,
});

function slickPrev2() {
    $('.sliderSlick2').slick('slickPrev');
    $('.sliderSlick2').slick('slickPause')
}

function slickNext2() {
    $('.sliderSlick2').slick('slickNext');
    $('.sliderSlick2').slick('slickPause')
}
