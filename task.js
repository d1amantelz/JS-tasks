// Каравашкин Вадим, Пдо-32
// Основы JS: Задание №1
// Нужно написать функцию, которая возвращает тип входного аргумента

// const getType = (arg) => typeof arg;
// console.log(getType(1))           // number
// console.log(getType("1"))         // string
// console.log(getType(true))        // boolean
// console.log(getType(null))        // object
// console.log(getType(undefined))   // undefined

// Основы JS: Задание №2
// Что выведется в консоль и почему?

// const a = () => console.log("a");
// const b = () => console.log("b");
// const c = a || b ? a() : b();
// console.log(c);

// В консоль будет выведено "a" и "undefined".
// Тернарный оператор возвращает результат выражения a || b.
// Поскольку a является истинным значением, он будет выбран.
// Затем вызывается функция a(), которая выводит "a" в консоль.
// Однако функция a не возвращает явно никакого значения,
// поэтому возвращается по умолчанию undefined.
// Полученное значение присваивается переменной c, и оно равно undefined.
// Затем undefined выводится в консоль с помощью console.log(c).

// ------------------------------
// Функции: Задание №1
// Нужно реализовать функцию, возвращающая сумму всех аргументов,
// если тип аргумента - число. Вызовов ВСЕГДА 5
// Реализация на костылях, но я не знаю как еще :)

// function myFunction(num) {
//     if (typeof myFunction.counter === 'undefined') {
//       myFunction.counter = 0;
//       myFunction.summ = 0;
//     }

//     myFunction.counter++;

//     if (typeof num === 'number') {
//       myFunction.summ += num;
//     }

//     if (myFunction.counter === 5) {
//         let result = myFunction.summ;
//         delete myFunction.counter;
//         delete myFunction.summ;
//         return result;
//     } 

//     return myFunction;
// }

// console.log(myFunction(1)('df')(undefined)(3)(null))   // 4
// console.log(myFunction(1)(2)(3)(4)(5))                 // 15
// console.log(myFunction(1)(20)(null)('')(3))            // 24

// ------------------------------
// Объекты и Массивы: Задание №1
// Реализовать функцию convertArrToObj, которая на вход принимает
// массив значений, а на выход отдает объект, где ключ - это индекс элемента в
// массиве, а значение - сам элемент

// function convertArrToObj(array) {
//     return array.reduce((obj, value, index) => {
//       obj[index] = value;
//       return obj;
//     }, {});
// }

// let test = ['Hello', 'World', '!']
// console.log(convertArrToObj(test))  // {0: "Hello", 1: "World", 2: "!"}

// Объекты и Массивы: Задание №2
// Требуется реализовать функцию countFromArr, которая позволяет
// подсчитать значения массива. На вход поступает массив, на выход получаем
// объект, где ключ - это элемент массива, а значение - его кол-во в массиве

// function countFromArr(array) {
//     return array.reduce((obj, value) => {
//       obj[value] = (obj[value] || 0) + 1;
//       return obj;
//     }, {});
// }

// let array = [1, 2, 2, 1, 3, 'test', 'test']
// console.log(countFromArr(array))  // {1: 2, 2: 2, 3: 1, "test": 2}

// Объекты и Массивы: Задание №3
// Требуется реализовать функцию groupByField, которая позволяет
// сгруппировать массив объектов по определенному полю этого объекта.
// На вход поступает массив объектов и строка с названием нужного поля, на выход
// объект - где ключом является значение поля объекта, а значением - массив
// объектов где значение в поле равно этому ключу.

// function groupByField(array, field) {
//     return array.reduce((obj, objItem) => {
//       const fieldValue = objItem[field];
//       if (fieldValue in obj) {
//         obj[fieldValue].push(objItem);
//       } else {
//         obj[fieldValue] = [objItem];
//       }
//       return obj;
//     }, {});
// }

// let arr = [
//     {'test': 1}, 
//     {'test': 2}, 
//     {'test': 2},
//     {'test': 3},
//     {'test': 1}
// ]
// console.log(groupByField(arr, 'test'))
// { 1: [{'test': 1}, {'test': 1}], 2: [{'test': 2}, {'test': 2}], 3: [{'test': 3}] }

// -----------------------------------
// Прототипы, наследование: Задание №1
// Реализовать функцию plus()
// (1).plus(2); // 3

// Number.prototype.plus = function(num) {
//     return this.valueOf() + num;
// }

// console.log((1).plus(9))  // 10

// -----------------------------------
// Асинхронная работа в JS: Задание №1
// Что выведется в консоль?

// console.log("start"); // Выводит start в консоль
// setTimeout(() => console.log("timeout"), 0) // Выполнит функцию вывода после завершения операций в стеке вызовов

// new Promise((resolve, reject) => {
//     console.log("promise constructor")      // Выводит promise constructor в консоль
//     reject(); // Отклонение промиса
// })
//   .then(() => console.log("p1"))    // Промис отклонен, вывод не выполнится
//   .catch(() => console.log("p2"))   // Так как промис отклонен, выводится p2 в консоль
//   .catch(() => console.log("p3"))   // Так как была обработка оклонений, вывод не выполнится
//   .then(() => console.log("p4"))    // Вывод p4 в консоль
//   .then(() => console.log("p5"))    // Вывод p5 в консоль
// console.log("final"); // Выводит final в консоль

// start
// promise constructor
// final
// p2
// p4
// p5
// timeout