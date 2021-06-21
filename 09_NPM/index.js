// Misalkan menjumlahkan setiap nilai di dalam array
const _ = require('lodash');
 
const myArray = [1, 2, 3, 4];
let sum = 0;
 
for(let i = 0; i < myArray.length; i++) {
    sum += myArray[i];
}
 
console.log(sum);
 
/* output
10
*/

// atau, kita bisa menggunakan fungsi reduce
const _ = require('lodash');
 
const myArray = [1, 2, 3, 4];
let sum = myArray.reduce((prev, curr) => {
    return prev + curr;
});
 
console.log(sum);
 
/* output
10
*/

// dengan lodash, kita dapat meringkas kode menjadi seperti ini :
const _ = require('lodash');
 
const myArray = [1, 2, 3, 4];
const sum = _.sum(myArray);
 
console.log(sum);
 
/* output
10
*/

