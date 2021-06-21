const mail = {
    from: "pengirim@dicoding.com",
  sendMessage: function(msg, to) {
    console.log(`you send: ${msg} to ${to} from ${this.from}`);
  } 
};

console.log(mail.from);
mail.sendMessage('apakabar', 'penerima@dicoding.com');
 
/**
output:
you send: apakabar to penerima@dicoding.com from pengirim@dicoding.com
**/

// mengubah from
mail.from = "pengirim2@dicoding.com";

// menambah function
mail.saveContact = function(addr) {
  console.log('email saved:', addr);
}

/*
Misalkan akan ada pertanyaan:

1.Bagaimana jika saya ingin membuat objek baru bernama mail2 dengan
atribut yang sama namun value yang berbeda dengan mail? Apakah harus 
mendefinisikan attribute dan function/method yang sama secara berulang?
2.Bagaimana jika saya ingin membuat mail2 tanpa attribute saveContact?
3.Bagaimana jika saya ingin menambahkan fungsi tambahan pada mail2?
  Dari sedikit pertanyaan di atas, maka fungsi paradigma OOP dapat menjadi solusi 
dikarenakan memiliki 4 pilar yang sudah disebutkan sebelumnya, di mana sederhananya
kita akan membuat base template dari sebuah object, kemudian dari base tersebut kita dapat
meng-instansiasi dalam bermacam bentuk objek. Di bawah ini adalah gambaran di mana Mail adalah 
base template dan sms, email, mailgroup adalah instansiasi dari Mail.
*/