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
