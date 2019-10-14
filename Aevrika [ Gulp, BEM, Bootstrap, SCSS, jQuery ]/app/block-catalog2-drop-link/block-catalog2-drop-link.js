function dropDownCatalog() {
    var x = document.getElementById("dropCatalog");
    var y = document.getElementById("dropCatalogLink");
    var z = document.getElementById("drop-arrow");

    if (x.style.top === "-1100px" || x.style.top === "") {
        x.style.top = "57px";
        $('#dropCatalogLink').addClass("block-catalog2-drop-link__link_font-brown");
        $('#drop-arrow').addClass("block-catalog2-drop-link__drop-arrow_brown");
        z.style.transform = "rotate(0.75turn)";
    } else {
        x.style.top = "-1100px";
        $('#dropCatalogLink').removeClass("block-catalog2-drop-link__link_font-brown");
        $('#drop-arrow').removeClass("block-catalog2-drop-link__drop-arrow_brown");
        z.style.transform = "rotate(0.25turn)";
    }
};
