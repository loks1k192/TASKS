/** ЗАДАЧА 75 - Перебор символов строки
 *
 * Подсчитайте количество строчных гласных букв в строке.
 * Гласные буквы - a, e, i, o, u
 */

let vowelsCount = 0;
const vowels = ["a", "e", "i", "o", "u"];

const str = "Today is the best day of my life";

// Напишите код здесь

for (let i = 0; i < str.length; i++) {
  if (vowels.includes(str[i])) {
    vowelsCount += 1;
  }
}

console.log(vowelsCount);
// 9
