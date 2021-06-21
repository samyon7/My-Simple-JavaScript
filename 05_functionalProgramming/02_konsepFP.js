// 1. Pure Function
/* 
Konsep dari pembuatan fungsi yang mengharuskan fungsi untuk tidak tergantung terhadap nilai yang
berada di luar fungsi atau parameternya.
*/

let PI = 3.14;

const hitungLuasLingkaran = (jariJari) => {
  return PI * (jariJari * jariJari); 
}

console.log(hitungLuasLingkaran(4)); // 50.24

PI = 5; // tidak sengaja nilai PI berubah

console.log(hitungLuasLingkaran(4)); // 80

// fungsi hitungLuasLingakran merupakan impure function. dimana nilai PI berubah

const hitungLuasLingkaran = (jariJari) => {
  return 3.14 * (jariJari * jariJari); 
}

console.log(hitungLuasLingkaran(4)); // 50.24
console.log(hitungLuasLingkaran(4)); // 50.24
console.log(hitungLuasLingkaran(8)); // 200.96
console.log(hitungLuasLingkaran(8)); // 200.96

// Fungsi hitungLuasLingkaran adalah pure function.

/* 
selain itu, pure function dilarang kerang untuk mengubah nilai yang berada di luar
baik secara sengaja atau tidak sengaja.
*/

const createPersonWithAge = (age, person) => {
  person.age = age;
  return person;
};

const person = {
  name: 'Bobo'
};

const newPerson = createPersonWithAge(18, person);

console.log({
  person,
  newPerson
});

/**
 * Output:
 *  {
      person: { name: 'Bobo', age: 18 },
      newPerson: { name: 'Bobo', age: 18 }
    }
*/

/* 
dengan menggunakan destructuring object, kita dapang mengubah impore function (seperti
    fungsi createPersonWithAge diatas) menjadi pure function (fungsi dibawah)
*/

const createPersonWithAge = (age, person) => {
  return { ...person, age };
};

const person = {
  name: 'Bobo'
};

const newPerson = createPersonWithAge(18, person);

console.log({
  person,
  newPerson
});

/**
 * Output:
 *  { 
 *    person: { name: 'Bobo' },
 *    newPerson: { name: 'Bobo', age: 18 } 
 *  }
*/

// 2. Immutability
/* 
Immutable berarti sebuah object tidak boleh diubah setelah object tersebut dibuat.
*/

const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newNamesWithExcMark = names.map((name) => `${name}!`);

console.log({
    names,
    newNamesWithExcMark,
});

/**
 * {
     names: [ 'Harry', 'Ron', 'Jeff', 'Thomas' ],
     newNamesWithExcMark: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
   }
 */

// misalkan anda perlu mengubah object tersebut
const user = {
    firstname: 'Harry',
    lastName: 'Protter', // ups, typo!
}

const renameLastNameUser = (newLastName, user) => {
    user.lastName = newLastName;
}

renameLastNameUser('Potter', user);

console.log(user);

/**
 * output:
 * { firstname: 'Harry', lastName: 'Potter' }
 * 
 */

// Tujuan anda berhasil akan tetapi itu bukanlah paradigma FP.
// alih alih mengubah object, sebaiknya membuat object baru

const user = {
    firstname: 'Harry',
    lastName: 'Protter', // ups, typo!
}

const createUserWithNewLastName = (newLastName, user) => {
    return { ...user, lastName: newLastName }
}

const newUser = createUserWithNewLastName('Potter', user);

console.log(newUser);

/**
 * output:
 * { firstname: 'Harry', lastName: 'Potter' }
 * 
 */


// 3. High-Order Function
/* 
    Fungsi yang dapat menerima fungsi lainnya pada argumen; mengembailkan fungsi, atau bahkan keduanya.
    Kita bisa menyimpan function dalam variable, memberikan functon sebagai parameter
    pada fungsi lainnya, hingga mengembalikan function di dalam function.
*/

/* 
Teknik Higher-Order Function biasanya digunakan untuk:
1. Mengabstraksi atau mengisolasi sebuah aksi, event, atau menangani alur asynchronous menggunakan callback, promise, dan lainnya.
2. Membuat utilities yang dapat digunakan diberbagai tipe data.
3. Membuat teknik currying atau function composition.
*/

const hello = () => {
  console.log('Hello!')
};

const say = (someFunction) => {
  someFunction();
}

const sayHello = () => {
    return () => {
        console.log('Hello!');
    }
}

hello();
say(hello);
sayHello()();

/**
 * Hello!
 * Hello!
 * Hello!
 */


const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const arrayMap = (array, fn) => {
    const newArray = [];
    
    for(let i = 0; i < array.length; i++) {
        newArray.push(fn(array[i]));
    }
    
    return newArray;
}

const newNames = arrayMap(names, (name) => `${name}!` );

console.log({
    names,
    newNames,
});

/**
 * output:
 * {
 *   names: [ 'Harry', 'Ron', 'Jeff', 'Thomas' ],
 *   newNames: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
 * }
 */