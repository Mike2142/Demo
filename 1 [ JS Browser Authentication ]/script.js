"use strict"; //ES5

//Спрашиваем имя, создаем переменную пароля
let userName = prompt('Кто там? \n\nПодсказка: Админ','');
let password;

// Проверяем ввод имени
// Вызываем функцию Запрос пароля, или возвращаем к запросу имени
if (userName == null) {
    alert('Отменено');
    location.reload();
} else if (userName === 'Админ') {
    Function();
} else {
    alert('Давайте познакомимся позже =)');
    location.reload();
}

// Функция Запрос пароля
// При неправильном пароле - спросит снова
function Function() {
    password = prompt('Введите пароль \n\nПодсказка: Я Главный','');
    if (password == null) {
        alert('Отменено');
        location.reload();
    } else if (password === 'Я Главный') {
        alert('Добрый день!');
        alert('Повелитель JavaScript!')
        location.reload();
    } else {
        alert('Неверный пароль');
        Function();
    }
}






