
function burgerMenu() {
    document.getElementById("burger").classList.toggle("change");

    var x = document.getElementById("mobileMenu");
    if (x.style.top === "85px") {
        x.style.top = "-350px";
    } else {
        x.style.top = "85px";
    }

}


$.fancybox.defaults.animationEffect = "zoom-in-out";

$.fancybox.defaults.animationDuration = "500";

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


$('input[type="tel"]').inputmask('9 (999) 999 99 99', { placeholder: " ", showMaskOnHover: false,
    showMaskOnFocus: false });

$("#date").inputmask('99/99/9999', { placeholder: " ", showMaskOnHover: false,
    showMaskOnFocus: false });


function selectFunction1() {
    var x = document.getElementById("event");
    x.style.color = "white";
}

function selectFunction2() {
    var x = document.getElementById("country");
    x.style.color = "white";
}


$('.sliderSlick').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    speed: 350,
});

function slickPrev() {
    $('.sliderSlick').slick('slickPrev')
}

function slickNext() {
    $('.sliderSlick').slick('slickNext')
}
