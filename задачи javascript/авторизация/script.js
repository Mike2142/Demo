"use strict"; //ES5

//Спрашиваем имя, создаем переменную пароля
let userName = prompt('Шаг 1. Кто там? \n\nПодсказка: Админ','');
let password;

// Проверяем ввод имени
// Вызываем функцию Запрос пароля, или возвращаем к запросу имени
switch(userName) {
    case null:
        alert('Отменено');
        location.reload();
        break;
    case 'Админ':
        Function();
        break;
    case '':
        alert('Введите имя пользователя');
        location.reload();
        break;
    default:
        alert('Давайте познакомимся позже =)');
        location.reload();
        break;
}

// Проверка имени; Вариант if else
/*if (userName == null) {
    alert('Отменено');
    location.reload();
} else if (userName === 'Админ') {
    Function();
} else if (userName === '') {
    alert('Введите имя пользователя');
    location.reload();
} else {
    alert('Давайте познакомимся позже =)');
    location.reload();
}*/

// Функция Запрос пароля
// При неправильном пароле - спросит снова
function Function() {
    password = prompt('Шаг 2. Введите пароль \n\nПодсказка: Я Главный','');
    switch(password) {
        case null:
            alert('Отменено');
            location.reload();
            break;
        case 'Я Главный':
            alert('Добрый день!');
            alert('Повелитель JavaScript!');
            location.reload();
            break;
        case '':
            alert('Вы не ввели пароль');
            Function();
            break;
        default:
            alert('Неверный пароль');
            Function();
            break;
    }
}

// Функция запрос пароля; Вариант if else
/*function Function() {
    password = prompt('Введите пароль \n\nПодсказка: Я Главный','');
    if (password == null) {
        alert('Отменено');
        location.reload();
    } else if (password === 'Я Главный') {
        alert('Добрый день!');
        alert('Повелитель JavaScript!')
        location.reload();
    } else if (password === '') {
        alert('Вы не ввели пароль');
        Function();
    } else {
        alert('Неверный пароль');
        Function();
    }
}*/




