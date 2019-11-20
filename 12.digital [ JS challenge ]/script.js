// Генерируем число записей в списке с лемурами (1 ≤ lemurSum ≤ 1000)
let lemurSum = Math.floor(Math.random() * 1000) + 1;
console.log("\n Количество упоминаний лемуров: " + lemurSum + "\n");

// Создаем список лемуров
let lemurList = [];

// Счетчик видов лемуров
let x = 0; // Кол-во Карликовых
let y = 0; // Кол-во Индриевых
let z = 0; // Кол-во Руконожковых

// Генерируем список лемуров и считаем виды. Всегда Карликовые > Индриевые > Руконожковые
for (i = 0; i < lemurSum; i++) {
    let lemurType = Math.floor(Math.random() * 6);
    if (lemurType === 0 || lemurType === 1 || lemurType === 2) {
        lemurList.push ("Карликовый");
        x++
    } else if (lemurType === 3 || lemurType === 4) {
        lemurList.push ("Индриевый");
        y++
    } else {
        lemurList.push ("Руконожковый");
        z++
    }
}

// Выводим результат счетчика видов
console.log(" Карликовых: " + x + "\n Индриевых: " + y + "\n Руконожковых: " + z);

// Определяем самый популярный вид
let popularSpecies = Math.max(x, y, z);
if (popularSpecies === x) {
    console.log("\n Самый популярный вид: Карликовые лемуры.\n Любители петь!")
} else if (popularSpecies === y) {
    console.log("\n Самый популярный вид: Индриевые лемуры.\n Любители потанцевать!")
} else {
    console.log("\n Самый популярный вид: Руконожковые лемуры.\n Любители сёрфинга! _.../")
}
console.log ("\n -- Для 12.digital -- \n");
