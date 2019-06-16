
app.controller('MainController', function($scope) {

    $scope.proposal = "В честь Дня народного единства Smeta.Cloud дарит всем бесплатный пакет на три дня!";

    /* прописать ссылки */

    $scope.options = [
        "О сервисе",
        "Договор",
        "Тарифы",
        "Оплата",
        "Базы",
        "Справка",
    ];

    $scope.optionsBottom = [
        "О сервисе",
        "Договор",
        "Тарифы",
        "Оплата",
        "Базы",
        "Справка",
        "Smeta.RU",
        "Нормонавигатор",
        "Смета НЦС"
        ];

    /*

    $scope.giftRegister = function () {

        var giftColor = document.getElementById("gift").style.color;

        /*  gift.style.background = "purple";  *


        if (giftColor === "#ff6666") {
            document.getElementById("gift").style.color = "#ffffff";
            document.getElementById("gift").style.background = "#ff6666";
            document.getElementById("gift").style.border = "1.45px solid #ffffff";
        } else {
            document.getElementById("gift").style.background = "#ffffff";
            document.getElementById("gift").style.color = "#ff6666";
            document.getElementById("gift").style.border = "1px solid #ff6666";
        }

    };

    */


});