// Array mengelempokkan lebih dari satu nilai dan menempatkannya dalam satu variable

let myArray = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray);

/* output:
[ 'Cokelat', 42.5, 22, true, 'Programming' ]
*/

let myArray = ["Coklat", 42.5, 22, true, "Programming"];
// Mengakses array menggunakan index
console.log(myArray[1]);

/* output:
42.5
*/


let myArray = ["Coklat", 42.5, 22, true, "Programming"];
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);
console.log(myArray[4]);
console.log(myArray[5]);

// Menghitung panjang array menggunakan .length
console.log("Panjang nilai myArray adalah " + myArray.length + ".");

/* output:
Coklat
42.5
22
true
Programming
undefined
Panjang nilai myArray adalah 5.
*/

const myArray = ["Coklat", 42.5, 22, true, "Programming"];
// Menambahkan data (posisi terakhir) ke array menggunakan metode push().
myArray.push('JavaScript');
console.log(myArray);

/* output
[ 'Coklat', 42.5, 22, true, 'Programming', 'JavaScript' ]
 */

const myArray = ["Orange", 42.5, 22, true, "Programming"];
// Mengeluarkan data (elemen terakhir) dari array menggunakan pop()
myArray.pop();
console.log(myArray);

/* output
[ Orange, 42.5, 22, true ]
*/


const myArray = ["Cokelat", 42.5, 22, true, "Programming"];
// shift() -> mengeluarkan elemen pertama dalam array
myArray.shift();
// unshift('something') -> memasukan string something ke dalam array posisi pertama
myArray.unshift("Apple");

console.log(myArray);

/* output
[ 'Apple', 42.5, 22, true, 'Programming' ]
*/


const myArray = ["Cokelat", 42.5, 22, true, "Programming"];
// delete -> menghapus data array berdasarkan index
delete myArray[1];
console.log(myArray);

/* output
[ 'Apple', <1 empty item>, 22, true, 'Programming' ]
*/

const myArray = ["Cokelat", 42.5, 22, true, "Programming"];
// splice -> menghapus elemen dalam array
myArray.splice(2, 1);   // Menhapus dari index 2 sebanyak 1 elemen
console.log(myArray);

/* output
[ 'Cokelat', 42.5, true, 'Programming' ]
*/


// # spread_operator
// menyebarkan nilai array atau iterable object menjadi beberapa elemen.

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
 
console.log(favorites);
 
/* output
[ 'Seafood', 'Salad', 'Nugget', 'Soup' ]
*/

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

console.log(...favorites);

/* output
Seafood Salad Nugget Soup
*/

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];

const allFavorites = [favorites, others];

console.log(allFavorites);

/* output
[
  [ 'Seafood', 'Salad', 'Nugget', 'Soup' ],
  [ 'Cake', 'Pie', 'Donut' ]
]
*/

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];

const allFavorites = [...favorites, ...others];

console.log(allFavorites);

/* output
[ 'Seafood', 'Salad', 'Nugget', 'Soup', 'Cake', 'Pie', 'Donut' ]
*/