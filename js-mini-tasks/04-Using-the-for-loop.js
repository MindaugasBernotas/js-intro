console.clear();

// Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
// 0 … 0
// 0 … 4
// 0 … 100
// 574 … 815
// -50 … 50
// -70 … 30
let sum = 0;
for (let i = 0; i < 5; i++) {
  console.log(i);
  sum += i;
}
console.log(sum);

let sum1 = 0;
for (let i = 0; i < 100; i++) {
  console.log(i);
  sum1 += i;
}
console.log(sum1);

let sum0;
// panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
// pvz.: “abcdef” -> “fedcba”

// Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
// 0 - 11
// 8 - 31
// -18 - 18

// rezultatą pateikti tokiu formatu:
// Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
// Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
// Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.

// var nums = ["100", "300", "400", "60", "40"],
//   num = 0;

// for (var i = 0; i < nums.length; i++) {
//   num += +nums[i];
// }
// console.log(num);

// console.log("////////////////////////////////////");

// const marks = [10, 2, 8, 4, 6];

// let suma = 0;

// for (let i = 0; i < 5; i++) {
//   const mark = marks[i];
//   suma += mark;
// }
// console.log("suma:", suma);
// console.log("kiekis:", marks.length);
// console.log("vidurkis:", suma / marks.length);
