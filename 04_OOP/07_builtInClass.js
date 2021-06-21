// #1 tanpa parameter, yang berarti `myDate` akan berisi tanggal dan waktu saat ini
const myDate = new Date(); 
 
// #2 parameter tanggal dalam bentuk string, misal  "January 01, 2021" 
const myDate = new Date(dateString); 
 
// #3 parameter dalam bentuk number, misal 87400000
const myDate = new Date(miliseconds); 
 
// #4 parameter tanggal dalam bentuk number (7 parameter), [hour,minute,second,millisecond] bersifat opsional
const myDate = new Date(year,month,date,hour,minute,second,millisecond); 


/*
getMonth() -> return bulan dalam bentuk angka 0-11 (0 adalah januari) -> myDate.getMonth()
getFullYear() -> return tahun (misal 2021) -> myDate.getFullYear()
getDate() -> return tanggal 1-31 -> myDate.getDate()
getHours() -> return Jam 0-23 -> myDate.getHours()
getMinutes() -> return Menit 0-59 -> myDate.getMinutes()
getSeconds() -> return Detik 0-59 -> myDate.getSeconds()
getMilliseconds() -> return Detik 0-999 -> myDate.getMilliseconds()
getTime() -> return waktu dalam bentuk epoch milli-detik (mulai dari 1 janurai,1970) -> myDate.getTime()
getday() -> return hari dalam seminggu 0-6 (0 artinya minggu) -> myDate.getday()
*/

/*
parse(datestring) -> merubah tanggal dalam format string menjadi epoch milliseconds -> Date.parse("2021-01-01")
UTC(year,[~params]) -> merubah tanggal dalam format string menjadi epoch milliseconds -> Date.UTC(2021,01,01)
*/

/*
YYYY -> tahun
MM -> bulan
DD -> tanggal
HH -> jam
mm -> menit
ss -> detik
sss -> millidetik
- -> pemisah tanggal
: -> pemisah waktu
Z -> tanggal akan diatur sebagai UTC
*/


// parameter birthday dapat berupa miliseconds ataupun date string
const myAge = birthday => {
  const birtday = new Date(birthday);
  const today = Date.now(); // today menghasilkan nilai miliseconds saat ini
  
  const diff_ms = today - birtday.getTime(); // menghitung selisih nilai miliseconds hari ini dan tanggal lahir
  const diffDate = new Date(diff_ms);
  
  return diffDate.getFullYear() - 1970; // 1970 adalah representasi 0 dari miliseconds
};

myAge('2000-01-22'); // 21 tahun



const listOfContent = [1,2,”President”, {}];
console.log(Array.isArray(listOfContent)); 
// result is true
 
const splitText = "12:20:00".split(':');
// result is [ '12', '20', '00' ]