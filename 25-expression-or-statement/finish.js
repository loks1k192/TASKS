/** ЗАДАЧА 25 - Выражение или инструкция
 *
 * Определите тип каждой конструкции JavaScript:
 *  - выражение (expression)
 *  - инструкция (statement)
 *  - выражение-инструкция (expression statement)
 */

15 //выражение - инструкция

const myObject = {
  x: 10,
  y: true,
}//инструкция

myObject.z = 'abc' //инструкция-выражение

delete myObject.x //инструкция

let newVariable //выражение

newVariable = 30 + 5 //выражение инструкция

console.log(newVariable)//инструкция

if (newVariable > 10) {
  console.log(`${newVariable} больше 10`)
} //инструкция
