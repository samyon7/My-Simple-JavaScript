// setTimeout() -> parameter pertama adalah fungsi yang akan dijalankan secara asynchronous, dan parameter kedua adalah nilai sumber milisecond sebagai nilai tunggu

console.log("Selamat datang!");
setTimeout(() => {
  console.log("Terima kasih sudah mampir, silakan datang kembali!");
}, 3000);
console.log("Ada yang bisa dibantu?");