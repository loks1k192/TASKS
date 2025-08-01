/** ЗАДАЧА 51 - Операторы "rest" (остаток) и "spread" (распространение)
 *
 * 1. Создайте функцию "meanScore",
 * которая будет принимать любое количество аргументов,
 * объединять их в один массив и возвращать среднее значение всех аргументов,
 * округленное до 2 знаков после запятой.
 *
 * 2. Если хотя бы один элемент в этом массиве не является числом -
 * выводим в консоль следующую ошибку:
 * "Все аргументы в вызове функции должны быть числами!"
 *
 * ПОДСКАЗКА: В этом задании вы должны использовать как оператор "rest",
 * так и оператор "spread".
 */

const scores1 = [0, 1.5, 2.5, 3.7];
const scores2 = [1.7, 4.5, 0, 4.9, 5.0, 4.2];
const scores3 = [1.3, 2.5, 1.9];
const scores4 = ["abc", 1.3, true, 2.5, 1.9];

function meanScore(...array) {
  let check = false;
  let sum = 0;
  array.forEach((element) => {
    if (typeof element !== "number") {
      check = true;
    }
  });
  if (check === true) {
    return "Все аргументы в вызове функции должны быть числами!";
  } else {
    array.forEach((element) => {
      sum += element;
    });
  }
  return parseFloat((sum / array.length).toFixed(2));
}

function meanScore(numbers) {
  if (numbers.some((num) => typeof num !== "number")) {
    return console.error("Все аргументы в вызове функции должны быть числами!");
  }

  return numbers
    .reduce((mean, num) => mean + num / numbers.length, 0)
    .toFixed(2);
}

console.log(meanScore(...scores1 /* все элементы из массива "scores1" */));
// 1.93

console.log(
  meanScore(
    ...scores1,
    ...scores2 /* все элементы из массивов "scores1" и "scores2" */
  )
);
// 2.8

console.log(
  meanScore(
    ...scores1,
    ...scores2,
    ...scores3 /* все элементы из массивов "scores1", "scores2" и "scores3" */
  )
);
// 2.59

console.log(meanScore(scores4 /* все элементы из массива "scores4" */));
// Все аргументы в вызове функции должны быть числами!
