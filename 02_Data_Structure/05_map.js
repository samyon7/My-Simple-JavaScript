// Mirip object tetapi map memperbolehkan key dengan bentuk apapun
const myMap = new Map([
    ['1', 'a String key'],
    [1, 'a number key'],
    [true, true]
]);

console.log(myMap);

/* output
Map(3) { '1' => 'a String key', 1 => 'a number key', true => true }
*/

const capital = new Map([
    ["Jakarta", "Indonesia"],
    ["London", "England"],
    ["Tokyo", "Japan"]
]);

// get() -> untuk mendapatkan data berdasarkan key
// set() -> untuk menambahkan pasangan key-value baru
console.log(capital.size);
console.log(capital.get("London"));
capital.set("New Delhi", "India");
console.log(capital.size);
console.log(capital.get("New Delhi"));

/* output
3
England
4
India
 */

const wrongMap = new Map();
wrongMap["My Key"] = "My Value";
// .has() -> mengecek apakah ada
// .delete() -> menghapus data
console.log(wrongMap.has("My Key"));
console.log(wrongMap.delete("My Key"));

/* output
false
false
 */