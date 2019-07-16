
$(window).scroll(function(){
    var threshold = 900;
    var op = (($(document).height() - $(window).height()) - $(window).scrollTop()) / threshold;
    if( op <= 0 ){
        $("#thing-to-hide").hide();
    } else {
        $("#thing-to-hide").show();
    }
    $("#next").css("opacity", op );
});


$(window).on("load resize", function() {

    var sliderWidth = $('[type=range]').width();

    $('.custom-style-element-related-to-range').remove();

    $('<style class="custom-style-element-related-to-range">input[type="range"]::-webkit-slider-thumb { box-shadow: -' + sliderWidth + 'px 0 0 ' + sliderWidth + 'px;}<style/>').appendTo('head');
});


$(function() {
    $.scrollify({
        section:".panel",
        scrollbars:true,
        before:function(i,panels) {
            var ref = panels[i].attr("data-section-name");
            $(".panel.actived").removeClass("actived");
            $("[data-section-name="+ref+"]").addClass("actived");
            // $('".' + ref+'"').addClass("actived");

            $(".pagination .active").removeClass("active");
            $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
            var cc2= ref === "first";

            if(cc2) {
                $(".panel1").addClass("actived");
            }else {
                $(".panel1").removeClass("actived");
            }
        },
        afterRender:function() {
            var pagination = "<ul class=\"pagination\">";
            var activeClass = "";
            $(".panel").each(function(i) {
                activeClass = "";
                if(i===0) {
                    activeClass = "active";
                }
                pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
            });

            pagination += "</ul>";

            $(".panel1").append(pagination);
        }
    });

    /* Вариант перехода

        $(".pagination a").on("click",function() {
          $.scrollify.move($(this).attr("href"));
      });

     */

    $(".pagination a").on("click",$.scrollify.move);

});

/*   Параметры Scrollify

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

 */


$('.sliderSlick').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    speed: 400,
});

function changeSlides (newVal) {

    if (newVal < 40) {

        $('.sliderSlick').slick('slickGoTo', 0);

    } else if (newVal >= 40 && newVal < 65) {

        $('.sliderSlick').slick('slickGoTo', 1);

    } else if (newVal >= 65) {

        $('.sliderSlick').slick('slickGoTo', 2);

    }
}