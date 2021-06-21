/* 
Object Error memiliki beberapa properti utama:
1. name : Nama error yang terjadi
2. message : Pesan tentang detail error
3. stack : informasi urutan kejadian yang menyebabkan error. Umumnya digunakan untuk
debbugging karena terdapat informasi baris mana yang menyebabkan error;

*/


try {
    console.log("Awal blok try");   // (1)
    errorCode;                      // (2)
    console.log("Akhir blok try");  // (3)
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}
 
/* output
Awal blok try
ReferenceError
errorCode is not defined
ReferenceError: errorCode is not defined
    at file:///home/dicoding/Playground/javascript/CoffeeMachine/error.js:3:5
    at ModuleJob.run (internal/modules/esm/module_job.js:152:23)
    at async Loader.import (internal/modules/esm/loader.js:166:24)
    at async Object.loadESM (internal/process/esm_loader.js:68:5)
*/

// try = Kode yang berpeluang menimbulkan kode
// catch = jika terjaid error pada kode blok try maka akan ditangkap dan ditangani blok kode catch
// finally = blok ini akan tetap berjalan tanpa peduli apa pun hasil yang terjadi pada blok try-catch

try {
    console.log("Awal blok try");
    console.log("Akhir blok try");
} catch (error) {
    console.log("Baris ini diabaikan");
} finally {
    console.log("Akan tetap dieksekusi");
}
 
/* output
Awal blok try
Akhir blok try
Akan tetap dieksekusi
*/