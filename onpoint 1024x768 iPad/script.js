
$(function() {
    $.scrollify({
        section : ".scroll",
    });
});

$.scrollify({
    section : ".scrollify",
    sectionName : "section-name",
    interstitialSection : "",
    easing: "easeOutExpo",
    scrollSpeed: 1100,
    offset : 0,
    scrollbars: true,
    standardScrollElements: "",
    setHeights: true,
    overflowScroll: true,
    updateHash: true,
    touchScroll:true,
    before:function() {},
    after:function() {},
    afterResize:function() {},
    afterRender:function() {}
});

$('.sliderSlick').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    speed: 400,
});

function changeSlides (newVal) {

    if (newVal <= 25) {

        $('.sliderSlick').slick('slickGoTo', 0);

    } else if (newVal >= 40 && newVal < 65) {

        $('.sliderSlick').slick('slickGoTo', 1);

    } else if (newVal >= 80) {

        $('.sliderSlick').slick('slickGoTo', 2);

    }
}