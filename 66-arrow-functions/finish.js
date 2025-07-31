/** ЗАДАЧА 66 - Стрелочные функции
 *
 * Замените обычные функции на стрелочные
 */

function mult(a, b) {
  return a * b;
}

const mult = (a, b) => {
  return a * b;
};

setTimeout(() => console.log(mult(5, 10)), 1000);

setTimeout(function () {
  console.log(mult(5, 10));
}, 1000);
// 50
