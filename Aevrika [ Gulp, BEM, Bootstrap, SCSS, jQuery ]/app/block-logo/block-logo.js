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
