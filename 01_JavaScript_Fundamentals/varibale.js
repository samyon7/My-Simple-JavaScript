// ## Variable

/* Pada Versi ECMAScript 2015 (ES6) dikenalkan deklarasi Variable let dan const untuk menggantikan var yang dinilai kontroversial dan rawan menimbukan bug */

// declaration statement
let lastName;
lastName = "Skywalker";

console.log(lastName);

// Output Skywalker

let lastName1 = "Brow";


// assigbnmenet expression
console.log(lastName1);

let fullName = let lastName; // Error karena let lastName adalah sebuah statement untuk deklarasi variabel. Statement tidak bisa berada di posisi expression.
let fullName = (lastName = “Skywalker”); // (lastName = “Skywalker”) merupakan expression, sehingga kode ini tidak error.
let fullName = “Luke” + “Skywalker”;


// const tidak dapat diubah tidak seperti let yang bisa diubah.

const z = 100;
console.log(z);
z = 200;
console.log(z)

/* TypeError: Assignment to constant variable. */