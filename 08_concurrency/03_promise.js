/* 
Promise (janji) mempunyai 3 kondisi:
1. pending
2. Fulfilled
3. Rejected
*/

// resolver function = executor function adalah fungsi yang dijalankan otomatis ketika constructor promise dipanggil
/* 
resolver function mempunyai dua parameter :
1. resolve() => pending -> fulfilled
2. reject() => pending -> rejected
*/
const executorFunction = (resolve, reject) => {
    const isCoffeeMakerReady = true;
    if (isCoffeeMakerReady) {
        resolve("Kopi berhasil dibuat");
    } else {
        reject("Mesin kopi tidak bisa digunakan");
    }
}
 
 
const makeCoffee = () => {
    return new Promise(executorFunction);
}
const coffeePromise = makeCoffee();
console.log(coffeePromise);
 
 
/* output
Promise { 'Kopi berhasil dibuat' }
*/

// consuming promises
/* 
.then() => 2 parameter:
1. promise == resolve
2. promise == reject
*/

const stock = {
    coffeeBeans: 250,
    water: 1000,
}
 
const checkStock = () => {
    return new Promise((resolve, reject) => {
        if (stock.coffeeBeans >= 16 && stock.water >= 250) {
            resolve("Stok cukup. Bisa membuat kopi");
        } else {
            reject("Stok tidak cukup");
        }
    });
};

const handleSuccess = resolvedValue => {
    console.log(resolvedValue);
}
 
const handleFailure = rejectionReason => {
    console.log(rejectionReason);
}
checkStock().then(handleSuccess, handleFailure);


// method catch akan terpanggil ketika object promise memiliki kondisi onRejected.
checkStock()
  .then(handleSuccess)
  .catch(handleFailure);