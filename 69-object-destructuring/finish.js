/** ЗАДАЧА 69 - Деструктуризация объектов
 *
 * Создайте функцию "mult", в которой будут умножаться
 * значения свойств x, y, z переданного объекта
 *
 * Результат умножения верните из функции
 */

const objectWithNumbers = {
  x: 5,
  y: 20,
  z: 3,
};

// Создайте функцию здесь
function mult(object) {
  let res = 1;
  let nums;
  nums = Object.values(object);
  nums.forEach((element) => {
    res *= element;
  });
  return res;
}

const result = mult(objectWithNumbers);
console.log(result);
// 300
