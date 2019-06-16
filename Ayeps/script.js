function selectFunction1() {
    var x = document.getElementById("event");
    x.style.color = "white";
}

function selectFunction2() {
    var x = document.getElementById("country");
    x.style.color = "white";
}

function Submit() {
    alert("Спасибо за ваш интерес! Мы получили вашу заявку и свяжемся в ближайшее время.");
}

$('.sliderSlick').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    speed: 350,
});

function slickPrev() {
    $('.sliderSlick').slick('slickPrev')
}

function slickNext() {
    $('.sliderSlick').slick('slickNext')
}
