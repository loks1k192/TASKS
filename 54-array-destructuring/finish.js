/** ЗАДАЧА 54 - Деструктуризация массива
 *
 * Измените раздел параметров в функции "processQuantities" так,
 * чтобы совпали выводы в консоли
 *
 * Используйте деструктуризацию массива
 */

const processQuantities = (arr) => {
  let defaultQty = 0;
  let minQty = 0;
  let maxQty = 0;

  arr.sort((a, b) => a - b);
  minQty = arr[0];
  maxQty = arr[arr.length - 1];
  if (arr.length > 2) {
    defaultQty = arr[1];
  }

  console.log(minQty); // 8
  console.log(maxQty); // 29
  console.log(defaultQty); // 10 в первом вызове, 0 во втором вызове
  return defaultQty + maxQty - minQty;
};

const inputQuantities1 = [8, 29, 10];
console.log(processQuantities(inputQuantities1)); // 31

const inputQuantities2 = [8, 29];
console.log(processQuantities(inputQuantities2)); // 21
