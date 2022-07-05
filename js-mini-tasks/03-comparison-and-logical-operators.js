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

// Tarpusavyje palyginti teksto tipo kintamųjų ilgius:
// kuris didesnis
// kuris mažesnis
// ar jie lygūs
// ar jie nelygūs
// kuris didesnis arba lygus
// kuris mažesnis arba lygus

// Išvesti sąrašo tipo kintamųjų ilgius

// Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:
// kuris didesnis
// kuris mažesnis
// ar jie lygūs
// ar jie nelygūs
// kuris didesnis arba lygus
// kuris mažesnis arba lygus
