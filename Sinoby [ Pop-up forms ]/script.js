
function burgerMenu() {
    document.getElementById("burger").classList.toggle("change");

    var x = document.getElementById("mobileMenu");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    };

}

$(document).ready(function(){

    $("a").on('click', function(event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                window.location.hash = hash;
            });
        }
    });
});

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