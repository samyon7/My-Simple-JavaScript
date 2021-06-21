// Overriding.
/* Overriding adalah teknik untuk kita melakukan perombakan (baik total ataupun tidak)
 pada sebuah method ataupun constructor yang dimiliki oleh parent class sehingga dapat 
 disesuaikan dengan behavior di child class.
 */


// Overriding contructor
class WhatsApp extends Mail{
    constructor(username, isBussinessAccount, phone) {
        this.from=phone;
    this.username = username;
    this.isBussinessAccount = true;
    }
}
 
const wa1 = new WhatsApp('dicoding', true, 089989090898);
/** 
Error:
Must call super constructor in derived class before accessing 'this' or returning from derived constructor
**/

// -> karena error, ini adalah solusi menggunakan super() :
// Overriding Method
// super.methodName()
class WhatsApp extends Mail{
  constructor(username, isBussinessAccount, phone) {
    super(phone);
    this.username = username;
    this.isBussinessAccount = true;
  }
    
  // Overriding method => Melakukan Override Total
  sendMessage = function(msg, to) {
    console.log('Send by WA');
  }
}

const wa1 = new WhatsApp('di', true, 089000999888);
wa1.sendMessage('halo', 089000999888);
 
/**
Output:
Send by WA
**/

sendMessage = function(msg, to) {
    super.sendMessage(msg, to);
    console.log('Send by WA');
}


/* Catatan :
1. super() digunakan untuk memanggil constructor parent.
2. super.methodName() digunakan untuk memanggil parent method
*/
