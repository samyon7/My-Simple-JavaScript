/* Object composition adalh prinsip komposisi dari sebuah alur bisnis tanpa perlu
melakukan pewarisan dari parent-nya. */

// 1. Memisahkan fungsi-fungsi umum yang biasa digunakan.
const yourGenericAction = params => ({
  actionA: () => { /** do action A **/},
  actionB: () => { /** do action B **/},  
});


// 2. Mmebuat class seperti biasa.
const YourClassName = (paramA, paramB) => {
}

// 3. Menyimpan attribute ke dalam sebuah object
// tips : menggunakan konstanta dengan nama self atau state untuk menampung attribute
const YourClassName = (paramA, paramB) => {
  const self = {
    paramsA,
    paramsB
  };
}

// 4. Menambahkan prilaku (method/function) yang hanya ada pada kelas tersebut
const YourClassName = (paramA, paramB) => {
  const self = {
    paramsA,
    paramsB
  };
  
  const yourSpecificActions = self => ({
    specificActinA: { /** do action A **/},
  });
}

// 5. Mmebuat kumpulan attribut, generic method, dan spesific method menjadi satu objet.
const YourClassName = (paramA, paramB) => {
  const self = {
    paramsA,
    paramsB
  };
  
  const yourSpecificActions = self => ({
    specificActinA: { /** do action A **/},
  });
  
  return Object.assign(self, yourGenericAction(self), yourSpecificActions(self))
}



// contoh
// [1] list of abstractions
const canSendMessage = self => ({
    sendMessage: () => console.log('send message:', self.message)
  });

const checkIsValidPhone = self => ({
    isValid: () => console.log('valid phone', self.from)
  });

// [2] crate object composition
const personalEnterprise = (from, message, store) => {
  // [3] attributes
  const self = {
    from,
    message,
    store
  };
  // [4] method
  const personalEnterpriseBehaviors = self => ({
    createCatalog: () => console.log('Catalog has created: ', self.store)
  });
  
  // [5] create object composition
  return Object.assign(self, personalEnterpriseBehaviors(self), canSendMessage(self), checkIsValidPhone(self));
};

const pe1 = personalEnterprise('pengirim@gmail.com', 'hei produk baru nih', 'Dicoding Store');
pe1.createCatalog(); //Catalog has created:  Dicoding Store
pe1.sendMessage(); //send message: hei produk baru nih