
window.onload= function hideBox(){
    document.getElementById("grayBox").style.visibility = "hidden";
};


function submitFunction() {
    document.getElementById("grayBox").style.visibility = "visible"
}

function updateTextFunction() {
    var domain = document.getElementById("input").value;
    document.getElementById("output").innerText = domain

}