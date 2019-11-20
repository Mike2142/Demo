// Задаем и выводим массив
let array = [5, 8, 13, 27, 14];
console.log('\n'+'Массив: '+ array);

// Считаем и выводим общую сумму массива
function getArraySum() {
    let sum = 0;
    for( var i = 0; i < array.length; i++ ){
        sum += parseInt( array[i], 10 );
    }
    return sum;
}
arraySum = getArraySum();
console.log('Общая сумма массива: '+ arraySum + '\n');

// Создаем переменную - "Наименьшая разность" двух куч камней
let smallDifference = 100;

// Фукция "Найти наименьшую разность"
function findSmallDifference() {

    // Первый цикл //
    //
    // Берем Первое число для новой кучи,
    //
    // Вычитаем число из оставшегося массива,
    // сравниваем полученную разность с переменной "Наименьшая разность" (smallDifference).
    // (Этот блок можно убрать)
    //
    // Создаем временный массив из которого исключаем выбранное число, для Второго цикла.
    //
    // Первое число и временный массив передаются во Второй цикл.
    for (let i=0; i < array.length; i++) {

        console.log('___ Первый цикл ___');

        let firstPile = array[i];
        console.log('Первая куча: ' + firstPile);
        let secondPile = arraySum - firstPile;
        console.log('Вторая куча: ' + secondPile);
        let difference = Math.abs(firstPile - secondPile);
        console.log('Разность: ' + difference + '\n');

        if (difference < smallDifference && secondPile > 0) {
            smallDifference = difference;
        }

        let tempArray = array.slice();
        tempArray.splice(i, 1);

        // Второй цикл //
        //
        // Второй цикл определяет Второе число для кучи,
        // число с которого начнется сложение всех следующих за ним, по порядку массива.
        for (let x = 0; x < tempArray.length; x++) {

            console.log('___ Второй цикл ___');

            // Установка счетчика для третьего цикла и сброc переменной для первой кучи
            let y = Object.assign(x);
            firstPile = array[i];

            // Третий цикл //
            //
            // Создаем первую кучу: Первое число + Второе число + все следующие числа по очереди.
            // После каждого сложения считаем оставшуюся вторую кучу, вычитаем вторую кучу из первой.
            // Сравниваем полученную разность с переменной "Наименьшая разность" (smallDifference).
            for (; y < tempArray.length; y++) {

                console.log('___ Третий цикл ___');

                firstPile += tempArray[y];
                console.log('Первая куча: ' + firstPile);
                secondPile = arraySum - firstPile;
                console.log('Вторая куча: ' + secondPile);
                difference = Math.abs(firstPile - secondPile);
                console.log('Разность: ' + difference + '\n');

                if (difference < smallDifference && secondPile > 0) {
                    smallDifference = difference;
                }
            }
        }
    }
}

// Вызываем функцию "Найти наименьшую разность" и выводим результат
findSmallDifference();
console.log('Наименьшая разность: ' + smallDifference + '\n');

// Есть нулевой подсчет:
// (5 + 8 + 13 + 27 + 14) - 67 = 0
// Сумма всех по порядку дает 67
// В начале каждого Первого цикла, в конце Второго цикла

// Возможно добавить цикл для 3его, 4го числа.
