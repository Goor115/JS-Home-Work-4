/* Создайте массив и внесите в него 10 случайных значений.

Для создания случайного значения используйте следующий код:

let randomValue = Math.floor(Math.random() * 101); // случайное значение от 0 до 100 будет записано в переменную randomValue

Выведите все значения, внесенные в массив, на экран с помощью цикла. */

let arr =[];

for (let i = 0; i < 10; i++) {
    let randomValue = Math.floor(Math.random() * 101);
    arr.push(randomValue);
}
console.log(arr);