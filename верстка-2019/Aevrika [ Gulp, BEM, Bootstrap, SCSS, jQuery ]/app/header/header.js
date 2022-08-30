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
