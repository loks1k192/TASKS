/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

const myArray = [
  {
    carBrand: "Audi",
    price: 1000,
    isAvailableForSale: true,
  },
  {
    carBrand: "Mercedes",
    price: 1200,
    isAvailableForSale: true,
  },
  {
    carBrand: "BMW",
    price: 1400,
    isAvailableForSale: false,
  },
];

myArray.push({
  carBrand: "Nissan",
  price: 600,
  isAvailableForSale: true,
});

console.log(myArray);
