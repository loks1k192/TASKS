/** ЗАДАЧА 80 - Сумма положительных и отрицательных чисел
 *
 * 1. Создайте функцию "sumPositiveNegative", которая принимает массив
 * и суммирует отдельно положительные и отрицательные числа.
 *
 * 2. Функция должна вернуть такой объект:
 *  {
 *    positive: 74, // сумма всех положительных чисел
 *    negative: -54 // сумма всех отрицательных чисел
 *  }
 */

const nums = [10, -12, 30, -1, -8, 0, 14, -33, 20];

// Создайте функцию "sumPositiveNegative" здесь
function sumPositiveNegative(array) {
  pos = array.filter((num) => num >= 0);
  neg = array.filter((num) => num < 0);
  sumPos = sumNeg = 0;
  pos.forEach((element) => {
    sumPos += element;
  });
  neg.forEach((elem) => {
    sumNeg += elem;
  });
  return {
    positive: sumPos,
    negatibe: sumNeg,
  };
}

const result = sumPositiveNegative(nums);

console.log(result);
// { positive: 74, negative: -54 }
