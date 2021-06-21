// Assignment Operatior
x = y;

let x = 10;
let y = 5


x += y;

console.log(x);


x += y; // artinya -> x = x + y;
x -= y; // artinya -> x = x - y;
x *= y; // artinya -> x = x * y;
x /= y; // artinya -> x = x / y;
x %= y; // artinya -> x = x % y;

// Comparison Operator

// == -> nilai apakah sama (tidak identik)
// != -> nilai apakah tidak sama
// === -> nilai apakah sama dan identik
// !== -> nilai apakah tidak sama dan tidak identik
// > -> lebih besar
// < -> lebih kecil
// >= lebih besar sama dengan
// <= lebih kecil sama dengan

let a = 10;
let b = 12;

console.log(a < b);
console.log(a > b);


const aString = '10';
const aNumber = 10

console.log(aString == aNumber) // true, karena nilainya sama-sama 10
console.log(aString === aNumber) // false, karena walaupun nilainya sama, tetapi tipe datanya berbeda


// Logical Operator
// && and
// || or
// ! not
let a = 10;
let b = 12;

/* AND operator */
console.log(a < 15 && b > 10); // (true && true) -> true
console.log(a > 15 && b > 10); // (false && true) -> false

/* OR operator */
console.log(a < 15 || b > 10); // (true || true) -> true
console.log(a > 15 || b > 10); // (false || true) -> true

/* NOT operator */
console.log(!(a < 15)); // !(true) -> false