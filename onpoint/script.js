window.onload = function() {

    document.getElementById("sliderX").value = 0;
    document.getElementById("tab1").style.visibility = "visible";
    document.getElementById("tab2").style.visibility = "hidden";
    document.getElementById("tab3").style.visibility = "hidden";

}

function changeSlides (newVal) {

    if ((newVal === '0') || (newVal === '5'))  {
        document.getElementById("tab1").style.visibility = "visible";
        document.getElementById("tab2").style.visibility = "hidden";
        document.getElementById("tab3").style.visibility = "hidden";

    } else if ((newVal === '20') || (newVal === '30')) {

        document.getElementById("tab1").style.visibility = "hidden";
        document.getElementById("tab2").style.visibility = "visible";
        document.getElementById("tab3").style.visibility = "hidden";

    } else if ((newVal === '45') || (newVal === '50')) {

        document.getElementById("tab1").style.visibility = "hidden";
        document.getElementById("tab2").style.visibility = "hidden";
        document.getElementById("tab3").style.visibility = "visible";


    }


}




