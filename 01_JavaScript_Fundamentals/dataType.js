
// ## Data Type

// Undefined
// Variable yang tidak memiliki nilai

let x;
console.log(typeof(x));


// Numbers
let z = 10;
console.log(typeof(x));

let y = 17.25;
console.log(typeof(x));


// Perhitungan aritmatika
let a = 12;
let b = 9;

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)


/* Increment dan Decrement */

let postfix = 5;
console.log(postfix++);
/* output: 5 */
console.log(postfix);
/* output: 6 */

let prefix = 5;
console.log(++prefix);
/* output: 6 */

// BigInt
// Umtuk membedakan tipe BitInt dan Number, tambbahkan n di akhir angka.
const bigNumber = 1234567890123456789012345678901234567890n;
const myInt = 1234567890123456789012345678901234567890;

console.log(bigNumber);
console.log(myInt);

/* output
1234567890123456789012345678901234567890n
1.2345678901234568e+39
*/

// Namun, BitInt tetap bisa menyimpan nilai yang lebih kecil.
const bigIntButSmall = 7n;

console.log(5n + 2n);
console.log(5n - 2n);
console.log(5n * 2n);
console.log(5n / 2n);
console.log(5n % 2n);

/* output
7n
3n
10n
2n; Bukan 2.5n
1n
*/


// Strings
let greet = "Hello";
console.log(typeof(greet));

// Jika ingin menambahkan petik dua, tambahkan petik
const question = '"What do you think of JavaScript", I Asked';
console.log(question);


// Error karena tidak ada petik
const answer = '"I think it's awesome!" he answered confidently';
console.log(answer);

// solusinya menggunakan backslash
const answer = '"I think it\'s awesome!" he answered confidently';

// selainitu backslash berguna untuk mengabaikan simbol yang menimbulkan ambigu di dalam string.
console.log("Windows path: C:\\Program Files\\MyProject");


// string concatenation (+), peggabungan string
let greet = "Hello";
let moreGreet = greet + greet;
console.log(moreGreet);


// string interpolation. Sederhananya kita bisa memasukan variable ke dalam sebuah string tempalte.
const myName = "Luke";
console.log(`Hello, my name is ${myName}.`);


// Boolean
let x = true;
let y = false;

console.log(typeof(x))
console.log(typeof(y))

const a = 10;
const b = 12;

let isGreater = a > b;
let isLess = a < b;

console.log(isGreater);
console.log(isLess);


// Null
let someLaterData = null;
console.log(someLaterData);


// Symbol
// Tipe data baru yang dikenalkan pada ES6. Untuk menunjukan identifier yang unik
const id = Symbol("id");

console.log(id);

const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 == id2);

