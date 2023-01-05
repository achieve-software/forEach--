console.log("****** ITERATION **********");

//?-------------- ÖRNEK -------------------
//?  Dizideki herbir fiyati konsola bastiriniz.

const prices = [100, 250, 50, 89];

prices.forEach((p) => console.log(p));

//? ORNEK: prices dizisindekilerin toplamini konsola yazdiriniz */
let sum = 0;
prices.forEach((price) => (sum += price));

console.log("SUM:", sum);

//! NOT: forEach metodu void metottur.(Herhangi bir deger dondurmez)
console.log(prices.forEach((price) => (sum += price))); //! undefined
