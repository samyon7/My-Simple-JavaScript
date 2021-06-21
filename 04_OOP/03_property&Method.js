// Function sama seperti Class
// cara 1
class Mail{
  from = 'pengirim@dicoding.com';
    contacts = [];
    sendMessage = function(msg, to) {
        console.log('you send:', msg, 'to', to, 'from', this.from);
    this.contacts.push(to); // menyimpan kontak baru
    };
}
 
 
// cara 2
function Mail() {
    this.from = 'pengirim@dicoding.com';
    this.contacts = [];
    this.sendMessage = function(msg, to) {
        console.log('you send:', msg, 'to', to, 'from', this.from);
    this.contacts.push(to); // menyimpan kontak baru
    };
};

class Mail{
  from = 'pengirim@dicoding.com';
	contacts = [];
	sendMessage = function(msg, to, from) {
		console.log('you send:', msg, 'to', to, 'from', from); // from di sini merujuk ke `from` parameter, bukan ke `from` dari global value yaitu pengirim@dicoding.com
    this.contacts.push(to);
	};
}

const mail1 = new Mail();
mail1.sendMessage('hallo', 'penerima@dicoding.com', 'aku@gmail.com');

/**
you send: hallo to penerima@dicoding.com from aku@gmail.com
**/

const mail1 = new Mail();
mail1.from; // 'pengirim@dicoding.com'
mail1.contacts; // ['penerima@dicoding.com']
mail1.sendMessage('hallo', 'penerima@dicoding.com'); // method mengirim pesan


/** 
cara 1, menggunakan var (hanya dapat digunakan pada penulisan kelas menggunakan statement `function`)
**/
var contacts = [];
// contoh
function Mail(){
  this.from = 'pengirim@dicoding.com';
    var contacts = [];
    sendMessage = function(msg, to) {
        console.log('you send:', msg, 'to', to, 'from', this.from);
                      contacts.push(to);
    };
}
 
 
/**
cara 2, cara ini dapat digunakan pada penulisan kelas menggunakan statement `function` dan `class`
**/
_contacts = []
// contoh
class Mail{
  from = 'pengirim@dicoding.com';
    _contacts = [];
    sendMessage = function(msg, to) {
        console.log('you send:', msg, 'to', to, 'from', this.from);
    this._contacts.push(to);
    };
}
 
 
/** 
cara 3, menambahkan prefix # , cara ini dapat digunakan pada penulisan kelas menggunakan statement `class` saja 
  **/
#contacts = [];
// contoh
class Mail{
  from = 'pengirim@dicoding.com';
    #contacts = [];
    sendMessage = function(msg, to) {
        console.log('you send:', msg, 'to', to, 'from', this.from);
    this.#contacts.push(to);
    };
}

// Class Method
const mail1 = new Mail();
mail1.sendMessage('hallo', 'penerima@dicoding.com');
/**
output-nya berhasil:
you send: hallo to penerima@dicoding.com from pengirim@dicoding.com
**/

Mail.sendMessage('hallo', 'penerima@dicoding.com');
/**
output-nya error:
TypeError: Mail.sendMessage is not a function
**/
// Karena harus di instansiasi terlebih dahulu

// Static Method (tanpa perlu instansiasi)
class Mail{
  static isValidPhone(phone) {
    return typeof phone === 'number';
  }
}
Mail.isValidPhone(089000000000) //true


// constructor : Sebuah method/function yang dijalankan pertama kali ketika object dibuat.
// cara 1, jika kita menggunakan statement class
class YourClassName{
  constructor(params1, params2, ....) {
    // do something here
  };
}
 
 
// cara 2, jika kita menggunakan statemen function
function Mail(params1, params2, ....) {
    this.yourPropertyName = params1;
  // do something here
}

// Penerapan
// cara 1
class Mail{
  constructor(author) {
    this.from = 'pengirim@dicoding.com';
    
    console.log('is instantiated', author);
  };
}
 
// cara 2
function Mail(author) {
    this.from = author;
  
  console.log('is instantiated', author);
}

const mail1 = new Mail("emailku@dicoding.com");
const mail1 = new Mail(085000111222); // misalkan untuk SMS
const mail2 = new Mail("emailku@dicoding.com"); // misalkan untuk Email