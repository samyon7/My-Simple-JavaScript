 function multiply(a,b) {
     return a * b;
 }

 multiply(3,4);



 function greeting() {
     console.log("Good Morning!"); 
 }

 greeting();


 function greetings(name, language) {
     if (language === "English") {
         console.log(`Good Morning ${name}!`);
     } else if (language === "French") {
         console.log(`Bonjour ${name}!`);
     } else {
         console.log(`Selamat Pagi ${name}!`);
     }
}


greetings("Harry","French");

/* output 
Bounjour Harry!
*/

const greetingss = function(name, language) {
    if(language === "English") {
        return "Good Morning " + name + "!";
    } else if (language === "French") {
        return "Bonjour " + name + "!";
    } else {
        return "Selamat Pagi " + name + "!";
    }
}

console.log(greetingss('Ron', 'English'));

/* output
Good Morning Ron!
 */

