// Cara 1
class YourClassName{}
class YourAnotherClassName{
    constructor(property1, property2) {}
}
 
 
// Cara 2
function YourClassName() {}
function YourAnotherClassName(property1, property2) {}
 
 
// pemanggilannya
const nameOfObject = YourClassName();
const nameOfObject2 = new YourAnotherClassName('value of property', 123);

// Function
function Mail() {
    this.from = 'pengirim@dicoding.com';
    this.sendMessage = function(msg, to) {
        console.log('you send:', msg, 'to', to, 'from', this.from);
    };
};
 
const mail1 = new Mail();
mail1.sendMessage('hallo', 'penerima@dicoding.com');
 
/**
output:
you send: hallo to penerima@dicoding.com from pengirim@dicoding.com
**/

// Class
class Mail{
  from = 'pengirim@dicoding.com';
    sendMessage = function(msg, to) {
        console.log('you send:', msg, 'to', to, 'from', this.from);
    };
}
 
const mail1 = new Mail();
mail1.sendMessage('hallo', 'penerima@dicoding.com');
 
/**
output:
you send: hallo to penerima@dicoding.com from pengirim@dicoding.com
**/