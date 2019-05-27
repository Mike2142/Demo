
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

    $scope.giftRegister = function () {

        var gift = document.getElementById("gift");

        gift.style.background = "purple";

        /*

        if (gift.style.color === "#ff6666") {
            gift.style.color = "white";
            gift.style.background = "#ff6666";
            gift.style.border = "1.45px solid white";
        } else  {
        gift.style.background = "white";
        gift.style.color = "#ff6666";
        gift.style.border = "1px solid #ff6666";

        }

        */


    };

});