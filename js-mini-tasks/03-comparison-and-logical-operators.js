// Kintamųjų palyginimas

// Lyginant, jei rezultatas tenkina palyginimo sąlygą, tai į console išvesti žodį “Pomidoras”, o jei sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.”.

let pomidoras = 2;
if (pomidoras === 1) {
  console.log("Pomidoras");
} else {
  console.log("Bandykite dar kartą");
}

// Tarpusavyje palyginti skaičiaus tipo kintamuosius:
// kuris didesnis
// kuris mažesnis
// ar jie lygūs
// ar jie nelygūs
// kuris didesnis arba lygus
// kuris mažesnis arba lygus

let a = 5;
let b = 10;

if (b > a) {
  console.log("b daugiau už a");
  if (a < b) {
    console.log("a mažiau už b");
    if (a === b) {
      console.log("a lygu b");
    } else {
      console.log("a nelygu b");
    }
  }
}
if (a <= b) {
  console.log("a vėl mažiau už b");
}

// Išvesti teksto tipo kintamųjų ilgius

let string = "teksto ilgis";
let n = string.length;
console.log(n);

// Tarpusavyje palyginti teksto tipo kintamųjų ilgius:
// kuris didesnis
// kuris mažesnis
// ar jie lygūs
// ar jie nelygūs
// kuris didesnis arba lygus
// kuris mažesnis arba lygus

let string1 = "Lorem ipsum";
let string2 = "lorem ipsum text";

let n1 = string1.length;
let n2 = string2.length;

if (n1 < n2) {
  console.log("pirmas tekstas mažesnis už antrą");
}
if (n2 > n1) {
  console.log("antras didesnis už pirmą");
}
if (n1 === n2) {
  console.log("tekstai lygus");
} else {
  console.log("tekstai nelygūs");
}
if (n1 >= n2) {
  console.log("pirmas tekstas didesnis arba lygus antram");
} else {
  console.log("antras tekstas lygus arba didesnis už pirmą");
}

// Išvesti sąrašo tipo kintamųjų ilgius

// Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:
// kuris didesnis
// kuris mažesnis
// ar jie lygūs
// ar jie nelygūs
// kuris didesnis arba lygus
// kuris mažesnis arba lygus

let a10 = 2,
  b20 = 5,
  c30 = 10;
console.log(b20 > c30);
console.log(b20 < c30);
console.log(b20 === c30);
console.log(b20 !== c30);
console.log(b20 >= c30);
console.log(b20 <= c30);

// alert(b > a); // Output: true
// alert(b > c); // Output: false
