/** ЗАДАЧА 50 - Шаблонные строки
 *
 * 1. Создайте функцию "templateLiteral" с одним параметром "num"
 *
 * 2. Функция должна возвращать многострочную строку.
 *
 * 3. Ниже приведены примеры вызовов функции.
 */

function templateLiteral(num) {
  if (num < 10) {
    res = `/* 
Число ${num}.
Это число меньше 10.
Квадратный корень этого числа - ${Math.sqrt(num)}.
*/`;
  } else {
    res = `/* 
Число ${num}.
Это число больше или равно 10.
Квадратный корень этого числа - ${Math.sqrt(num)}.
*/`;
  }
  return res;
}

// ТЕСТ 1
const myNumber = 9;
console.log(templateLiteral(myNumber));
/* 
Число 9.
Это число меньше 10.
Квадратный корень этого числа - 3.
*/

// ТЕСТ 2
const myAnotherNumber = 25;
console.log(templateLiteral(myAnotherNumber));
/* 
Число 25.
Это число больше или равно 10.
Квадратный корень этого числа - 5.
*/
