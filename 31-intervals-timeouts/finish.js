/** ЗАДАЧА 31 - Интервалы и Таймауты
 *
 * Используйте следующие встроенные функции:
 * setTimeout
 * setInterval
 * clearInterval
 *
 * Нужно вывести в консоль ТОЛЬКО 5 сообщений с интервалом 2 секунды:
 * "Сообщение номер 1"
 * "Сообщение номер 2"
 * "Сообщение номер 3"
 * "Сообщение номер 4"
 * "Сообщение номер 5"
 */

/**for (let i = 1; i < 6; i += 1) {
  setTimeout(() => {
    console.log(`Сообщение номер ${i}`);
  }, i * 2000);
}*/

/**
 * let j = 1;
const id = setInterval(() => {
  console.log(`Сообщение номер ${j}`);
  j += 1;
  if (j === 6) {
    clearInterval(id);
  }
}, 2000);
*/

let i = 1;
const a = setInterval(() => {
  console.log("Сообщение номер " + i);
  i += 1;
}, 2000);

setTimeout(() => clearInterval(a), 11000);
