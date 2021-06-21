// Encapsulation
// Kondisi di mana attribute atau method di dalam class dibungkus dan bersifat privat.
class Mail{
    _contacts = [];
    constructor(author) {
        this.from = author;
    }
    sendMessage = function(msg, to) {
        console.log('you send:', msg, 'to', to, 'from', this.from);
        this._contacts.push(to);
    }
    showAllContacts() {
        return this._contacts;
    }
}

// Abstraction
// Penerapan alami dari enkapsulasi. Objeek hanya menunjukkkan operasinya secara high-level. Misalnya kita cukup tahu bagaimana persan dikirm atau diterima.
// namun kita tidak perlu tahu seperti apa proses enkripsi dan deskripsi isi pesan

// Inheritance (pewarisan).
// cara 1: menggunakan keyword `extends` jika menggunakan statement `class`
class ChildClassName extends ParentClassName{}
 
 
// cara 2: menggunakan `prototype` jika menggunakan statement `function` / `class`
ChildClassName.prototype = new ParentClassName()

class Mail{
  _contacts = [];
           constructor(author) {
                     this.from = author;
           };
	sendMessage = function(msg, to) {
		console.log('you send:', msg, 'to', to, 'from', this.from);
                     this._contacts.push(to);
	};
	showAllContacts() {
    return this._contacts;
  }
}

class WhatsApp extends Mail{
           username = 'dicoding';
	isBussinessAccount = true;
	
	myProfile = function() {
                   return `my name ${this.username}, is ${this.isBussinessAccount? 'Business': 'Personal'}`;
            };
}

const wa1 = new WhatsApp(080111000222);
console.log(wa1.myProfile());
// my name dicoding, is Business



// Polymorphism
// banyak bentuk?